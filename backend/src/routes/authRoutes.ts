//routes for loging,sign up, sigout, passowrd
import express from 'express';
import * as authController from '../controllers/authController';
import { forgotPassword} from '../controllers/authController';
import { resetPassword } from '../controllers/authResetPass';
//import { handleResetPassword } from '../controllers/authResetPass';
import auth from '../middleware/auth';
//import * as googleAuthController from '../controllers/googleAuthController';

const router = express.Router();

// Email authentication routes
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/signout', authController.signout);

//reset password
router.post('/forgot-password', forgotPassword);
//router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);
//router.post('/reset-password', handleResetPassword);
router.post('/reset-password', auth, resetPassword);

export default router;