import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import OTP from "../models/otp"; // Create an OTP model
import { Options } from "nodemailer/lib/mailer";
//import UserPlaylist from '../models/UserPlaylist';
import auth from "../middleware/auth";

// Update IUser interface to include resetToken
interface IUser {
  [x: string]: any;
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  updated_at: Date;
  resetToken?: string; // Add resetToken property
}

const createTransporter = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
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
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  return transporter;
};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Generate hashed password
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser: IUser = new User({
      _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId for the user
      name,
      email,
      password: hashedPassword,
      role: "user", // Default role as user
      created_at: new Date(),
      updated_at: new Date(),
    });

    // Create an empty playlist for the new user
    //const playlist = new UserPlaylist({ userId: newUser._id, songs: [] });
    //await playlist.save();

    const result = await newUser.save();

    const token = jwt.sign(
      { email: result.email, id: result._id, role: result.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    console.error("Signup error:", error); // Log the error
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn’t exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signout = (req: Request, res: Response) => {
  res.status(200).json({ message: "User signed out" });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  //console.log(email)
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Remove existing OTP record if it exists
    await OTP.findOneAndDelete({ email });

    // Generate OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to database
    const otp = new OTP({ email, code: otpCode });
    await otp.save();

    /////// Set/resetToken for the user
    //user.resetToken = otpCode; // Assuming your User schema has a resetToken field
    //await user.save();

    // Send OTP to user via email
    const transporter = await createTransporter();
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP code is ${otpCode}`,
    };
    transporter.sendMail(mailOptions);
    type ExtendedOptions = Options & {
      auth: { user: string | undefined; refreshToken: string | undefined };
    };
    const options: ExtendedOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP code is ${otpCode}`,
      auth: {
        user: process.env.EMAIL,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
    };
    transporter.sendMail(options);

    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ message: "Server error" });
  }
};
