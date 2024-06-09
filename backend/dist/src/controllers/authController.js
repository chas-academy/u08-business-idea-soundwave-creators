"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.forgotPassword = exports.signout = exports.login = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const otp_1 = __importDefault(require("../models/otp")); // Create an OTP model
const createTransporter = () => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Server is ready to take our messages");
        }
    });
    return transporter;
});
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Generate hashed password
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const newUser = new user_1.default({
            _id: new mongoose_1.default.Types.ObjectId(), // Generate a new ObjectId for the user
            name,
            email,
            password: hashedPassword,
            role: 'user', // Default role as user
            created_at: new Date(),
            updated_at: new Date(),
        });
        // Create an empty playlist for the new user
        //const playlist = new UserPlaylist({ userId: newUser._id, songs: [] });
        //await playlist.save();
        const result = yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ email: result.email, id: result._id, role: result.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ result, token });
    }
    catch (error) {
        console.error('Signup error:', error); // Log the error
        res.status(500).json({ message: 'Something went wrong' });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const existingUser = yield user_1.default.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: 'User doesn’t exist' });
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            return res.status(400).json({ message: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});
exports.login = login;
const signout = (req, res) => {
    res.status(200).json({ message: 'User signed out' });
};
exports.signout = signout;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    //console.log(email)
    try {
        const user = yield user_1.default.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Generate OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        // Save OTP to database
        const otp = new otp_1.default({ email, code: otpCode });
        yield otp.save();
        /////// Set/resetToken for the user
        user.resetToken = otpCode; // Assuming your User schema has a resetToken field
        yield user.save();
        // Send OTP to user via email
        const transporter = yield createTransporter();
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP code is ${otpCode}`,
        };
        const options = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP code is ${otpCode}`,
            auth: {
                user: process.env.EMAIL,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            },
        };
        transporter.sendMail(options);
        res.status(200).json({ message: 'OTP sent to your email' });
    }
    catch (error) {
        console.error('Error in forgot password:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.forgotPassword = forgotPassword;
const verifyOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { otp } = req.body;
    try {
        const otpRecord = yield otp_1.default.findOne({ code: otp });
        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        // OTP verified, allow password reset
        res.status(200).json({ message: 'OTP verified' });
    }
    catch (error) {
        console.error('Error in verify OTP:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.verifyOTP = verifyOTP;
// interface ResetPasswordRequest {
//   body: {
//     token: string;
//     password: string;
//     confirmPassword: string;
//   };
// }
// as ResetPasswordRequest['body']
/* export const resetPassword = async (req: Request, res: Response) => {
  const { token, password, confirmPassword } = req.body;

  try {
    // Find user by reset token
    const user = await User.findOne({ resetToken: token });

    if (!user) {
      // If no user found with the provided reset token, return an error response
      return res.status(403).json({ message: 'Invalid reset token' });
    }

    // Update user password
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.resetToken = undefined; // Clear reset token after password reset
    await user.save();

    // Return success message after password reset
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    // Handle any errors that occur during the password reset process
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Failed to reset password. Please try again.' });
  }
};
*/ 
