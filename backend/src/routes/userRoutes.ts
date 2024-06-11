// routes/userRoutes.ts   Manages user profile-related routes
import express from "express";
import auth from "../middleware/auth";
import {
  getUserProfile,
  deleteUser,
  getAllUsers,
} from "../controllers/userController";

const router = express.Router();

router.get("/me", auth, getUserProfile);
router.get("/users", getAllUsers);
router.delete("/:id", deleteUser);

export default router;
