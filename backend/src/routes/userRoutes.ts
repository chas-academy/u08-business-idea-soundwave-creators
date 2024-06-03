// routes/userRoutes.ts   Manages user profile-related routes
import express from 'express';
import auth from '../middleware/auth';
import { getUserProfile, deleteUser, getAllUsers } from '../controllers/userController';


const router = express.Router();

router.get('/me', auth, getUserProfile );
router.get('/users', getAllUsers );
router.delete('/:id', deleteUser);


// Get user profile
//router.get('/profile', auth, getUserProfile);

// Update user profile
//router.put('/profile', auth, updateUserProfile);

export default router;


//below is js format
// // models/user.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   googleId: { type: String }, // Allow null for non-Google sign-in
//   role: { type: String, default: 'user' }, // 'user' or 'admin'
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('User', userSchema);
