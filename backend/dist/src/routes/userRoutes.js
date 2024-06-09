"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoutes.ts   Manages user profile-related routes
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.get('/me', auth_1.default, userController_1.getUserProfile);
router.get('/users', userController_1.getAllUsers);
router.delete('/:id', userController_1.deleteUser);
// Get user profile
//router.get('/profile', auth, getUserProfile);
// Update user profile
//router.put('/profile', auth, updateUserProfile);
exports.default = router;
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
