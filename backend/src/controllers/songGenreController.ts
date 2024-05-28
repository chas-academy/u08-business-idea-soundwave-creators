import { Request, Response } from "express";
import Song from "../models/song.model";

export const getSongsByGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const genre = req.query.genre as string;

  if (!genre) {
    res.status(400).send("Genre query parameter is required");
    return;
  }

  try {
    const songs = await Song.find({ genre: genre });
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).send("Internal Server Error");
  }
};
