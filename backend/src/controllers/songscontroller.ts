import { Request, Response } from 'express';
import Song from '../models/songs';
import mongoose from 'mongoose';


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
      console.log(typeof Number(req.params.albumId));
      const songs = await Song.find({ albumId: Number(req.params.albumId) });
      console.log(songs);
      res.json(songs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };