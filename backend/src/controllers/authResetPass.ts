/* import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user'; // Import the User model
import OTP from '../models/otp';

export const resetPassword = async (req: Request, res: Response) => {
    const { token, password, confirmPassword, email } = req.body;
  
    try {
      // Find the OTP record
      const otpRecord = await OTP.findOne({ code: token, email });
  
      if (!otpRecord) {
        // If no OTP record found with the provided code and email, return an error response
        return res.status(403).json({ message: 'Invalid OTP or email' });
      }
  
      // Check if passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
  
      // Find user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        // If no user found with the provided email, return an error response
        return res.status(404).json({ message: 'User not found' });
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
  
  // Route handler for resetting password
  export const handleResetPassword = async (req: Request, res: Response) => {
    try {
      await resetPassword(req, res); // Call the resetPassword function
    } catch (error) {
      console.error('Error handling password reset:', error);
      res.status(500).json({ message: 'Failed to reset password. Please try again.' });
    }
  };*/

  import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user'; // Import the User model
import OTP from '../models/otp';
import auth from '../middleware/auth';

export const resetPassword = async (req: Request, res: Response) => {
  const { otp, password, confirmPassword, email } = req.body;

  try {
    // Find the OTP record
    console.log (otp, email)
    const otpRecord = await OTP.findOne({ code: otp, email });

    if (!otpRecord) {
      // If no OTP record found with the provided code and email, return an error response
      return res.status(403).json({ message: 'Invalid OTP or email' });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      // If no user found with the provided email, return an error response
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user password
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.resetToken = undefined; // Clear reset token after password reset
    await user.save();

    // Return success message after password reset
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error: any) {
    // Handle any errors that occur during the password reset process
    console.error('Error resetting password:', error);

    // Check if the error is related to bcrypt hashing
    if (error.name === 'BcryptHashError') {
      return res.status(500).json({ message: 'Failed to hash password. Please try again.' });
    }

    // Check if the error is a database query error
    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(500).json({ message: 'Database error. Please try again.' });
    }

    res.status(500).json({ message: 'Failed to reset password. Please try again.' });
  }
};

// Route handler for resetting password// Route handler for resetting password
export const handleResetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Ensure that the auth function returns a Promise
    await new Promise<void>((resolve, reject) => {
      auth(req, res, (err?: Error | string) => { // Adjust the callback function signature
        if (err) {
          if (typeof err === 'string') {
            reject(new Error(err)); // If the error is a string, wrap it in an Error object
          } else {
            reject(err); // Reject the Promise if authentication fails
          }
        } else {
          resolve(); // Resolve the Promise if authentication succeeds
        }
      });
    });

    // Call the resetPassword function after successful authentication
    await resetPassword(req, res);
  } catch (error) {
    console.error('Error handling password reset:', error);
    res.status(500).json({ message: 'Failed to reset password. Please try again.' });
  }
};

