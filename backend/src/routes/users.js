// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const userController = require('../controllers/userController');

// // Google Authentication
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), userController.socialMediaAuthSuccess);

// // Facebook Authentication
// router.get('/auth/facebook', passport.authenticate('facebook'));
// router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), userController.socialMediaAuthSuccess);

// // GitHub Authentication
// router.get('/auth/github', passport.authenticate('github'));
// router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), userController.socialMediaAuthSuccess);


// // Add login and registration routes
// router.post('/login', userController.loginWithEmail);
// router.post('/signup', userController.signupWithEmail);
 
// // User profile management
// router.get('/profile', userController.getUserProfile);
// router.post('/profile/update', userController.updateUserProfile);
// router.delete('/profile', userController.deleteUser);

// module.exports = router;


// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String }, // Allow null for non-Google sign-in
  role: { type: String, default: 'user' }, // 'user' or 'admin'
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
