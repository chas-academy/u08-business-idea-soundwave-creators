// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// Google Authentication
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), userController.socialMediaAuthSuccess);

// Facebook Authentication
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), userController.socialMediaAuthSuccess);

// GitHub Authentication
router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), userController.socialMediaAuthSuccess);


// Add login and registration routes
router.post('/login', userController.loginWithEmail);
router.post('/signup', userController.signupWithEmail);
 
// User profile management
router.get('/profile', userController.getUserProfile);
router.post('/profile/update', userController.updateUserProfile);
router.delete('/profile', userController.deleteUser);

module.exports = router;
