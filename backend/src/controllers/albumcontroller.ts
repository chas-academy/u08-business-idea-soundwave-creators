
import { Request, Response, response } from "express";

// import { IAlbum } from '../interfaces/IAlbum';

// import Album, { IAlbum } from "../models/albums";
import Album, { IAlbum } from "../models/albums";

import albums from "../models/albums";
import { error } from "console";


// CRUD operations
const create = async (data: IAlbum) => {
  return await Album.create(data);
};

const readAll = async () => {
  const albums = await Album.find({});
  return albums;
};

const read = async (id: string) => {
  return await Album.findById(id);
};

const update = async (id: string, data: IAlbum) => {
  return await Album.findByIdAndUpdate(id, data, { new: true });
};

const deleteOne = async (id: string) => {
  return await Album.findByIdAndDelete(id);
};


// Controllers

export const getAllAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await readAll();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Failed to get albums", error });
  }
};



export const getAlbum = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const album = await read(id);
    if (album) {
      res.status(200).json(album);
    } else {
      res.status(404).json({ message: "Album not found" });
    }
    // res.status(404).json({message:"testing mongoose"})
  } catch (error) {
    res.status(500).json({ message: "Failed to get album", error });
  }
};



export const deleteAlbum = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedAlbum = await deleteOne(id);
    if (deletedAlbum) {
      res.status(200).json({ message: "Album deleted", deletedAlbum });
    } else {
      res.status(404).json({ message: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete album", error });
  }
};
