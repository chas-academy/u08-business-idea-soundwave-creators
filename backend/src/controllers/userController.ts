// for userprofile 
import { Request, Response } from 'express';
import User from '../models/user';
//import axios from 'axios';

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId; // Assuming userId is set in the auth middleware
    const user = await User.findById(userId).select('-password'); // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Define a controller function to handle deleting a user
export const deleteUser = async (req: Request, res: Response) => {
  try {
      const userId = req.params.id; // Get the user ID from the request parameters


      // If user exists, proceed with deletion
      await User.findByIdAndDelete(userId);

      // Return a success response
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      // If an error occurs, return an error response
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};