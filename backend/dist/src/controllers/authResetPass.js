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
exports.handleResetPassword = exports.resetPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user")); // Import the User model
const otp_1 = __importDefault(require("../models/otp"));
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, password, confirmPassword, email } = req.body;
    try {
        // Find the OTP record
        const otpRecord = yield otp_1.default.findOne({ code: token, email });
        if (!otpRecord) {
            // If no OTP record found with the provided code and email, return an error response
            return res.status(403).json({ message: 'Invalid OTP or email' });
        }
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        // Find user by email
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            // If no user found with the provided email, return an error response
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user password
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        user.password = hashedPassword;
        user.resetToken = undefined; // Clear reset token after password reset
        yield user.save();
        // Return success message after password reset
        res.status(200).json({ message: 'Password reset successfully' });
    }
    catch (error) {
        // Handle any errors that occur during the password reset process
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Failed to reset password. Please try again.' });
    }
});
exports.resetPassword = resetPassword;
// Route handler for resetting password
const handleResetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.resetPassword)(req, res); // Call the resetPassword function
    }
    catch (error) {
        console.error('Error handling password reset:', error);
        res.status(500).json({ message: 'Failed to reset password. Please try again.' });
    }
});
exports.handleResetPassword = handleResetPassword;
