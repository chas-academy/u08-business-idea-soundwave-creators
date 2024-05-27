import { Request, Response } from 'express';
import Song from '../models/songs';


export const getAllSongs = async (req: Request, res: Response) => {
    try {
      const songs = await Song.find({});
      res.status(200).json(songs);
    } catch (error) {
      res.status(500).json({ message: "Failed to get songs", error });
    }
  };

  export const getSongsByAlbumId = async (req: Request, res: Response): Promise<void> => {
    try {
      const songs = await Song.find({ albumId: req.params.albumId });
      res.json(songs);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };