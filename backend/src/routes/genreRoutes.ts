import { Router } from "express";
import { getSongsByGenre } from "../controllers/songGenreController";

const router = Router();

router.get("/songs", getSongsByGenre);

export default router;
