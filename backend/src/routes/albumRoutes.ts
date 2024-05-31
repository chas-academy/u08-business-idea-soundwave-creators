import { Router } from "express";
import {
  deleteAlbum,
  getAllAlbums,
  getAlbum,
} from "../controllers/albumcontroller";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:id", getAlbum);
router.delete("/:id", deleteAlbum);

export default router;
