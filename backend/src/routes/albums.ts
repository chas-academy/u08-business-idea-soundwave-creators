import { Router } from "express";
import { addAlbum, deleteAlbum, getAllAlbums,getAlbum, updateAlbum } from "../controllers/albumcontroller";

const bookRouter = Router();

bookRouter.get("/", getAllAlbums);
bookRouter.post("/", addAlbum);
bookRouter.get("/:id", getAlbum);
bookRouter.put("/:id", updateAlbum);
bookRouter.delete("/:id", deleteAlbum);

export default bookRouter;