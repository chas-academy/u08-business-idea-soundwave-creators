//routes for loging,sign up, sigout, passowrd
import express from 'express';
import * as authController from '../controllers/authController';
import { forgotPassword, verifyOTP } from '../controllers/authController';
import { resetPassword } from '../controllers/authResetPass';

//import * as googleAuthController from '../controllers/googleAuthController';

const router = express.Router();

// Email authentication routes
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/signout', authController.signout);

//reset password
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);
export default router;


//1.then have two different controller ,one logig for login register oand out for email ,one for goole,2. one route for all and 3. one server file for importing
// Google authentication route
//router.post('/google', googleAuthController.googleAuth);
//router.post('/google/callback', googleAuthController.googleAuthCallback); // Add this line

