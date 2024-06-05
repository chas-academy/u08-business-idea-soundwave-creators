import { Request, Response } from 'express';
import Song from '../models/songs';
//import mongoose from 'mongoose';


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




// export const getAllSongs = async (req: Request, res: Response) => {
//     try {
//       const song = await songs.find({});
//       res.status(200).json(song);
//     } catch (error) {
//       res.status(500).json({ message: "Failed to get songs", error });
//     }
//   };

//   export const getSongsByAlbumId = async (req: Request, res: Response): Promise<void> => {
//     try {
//       console.log(typeof Number(req.params.albumId));
//       const song = await songs.find({ albumId: Number(req.params.albumId) });
//       console.log(song);
//       res.json(songs);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };

  //delete song
export const deleteSong = async (req: Request, res: Response) => {
  try {
      const songId = req.params.id;
      await Song.findByIdAndDelete(songId);
      res.status(200).json({ message: 'Song deleted successfully' });
  } catch (error) {
      console.error('Error deleting song:', error);
      res.status(500).json({ message: 'Server error' });
  }
};

