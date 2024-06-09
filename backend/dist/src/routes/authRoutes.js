"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//routes for loging,sign up, sigout, passowrd
const express_1 = __importDefault(require("express"));
const authController = __importStar(require("../controllers/authController"));
const authController_1 = require("../controllers/authController");
const authResetPass_1 = require("../controllers/authResetPass");
//import * as googleAuthController from '../controllers/googleAuthController';
const router = express_1.default.Router();
// Email authentication routes
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/signout', authController.signout);
//reset password
router.post('/forgot-password', authController_1.forgotPassword);
router.post('/verify-otp', authController_1.verifyOTP);
router.post('/reset-password', authResetPass_1.resetPassword);
exports.default = router;
//1.then have two different controller ,one logig for login register oand out for email ,one for goole,2. one route for all and 3. one server file for importing
// Google authentication route
//router.post('/google', googleAuthController.googleAuth);
//router.post('/google/callback', googleAuthController.googleAuthCallback); // Add this line
