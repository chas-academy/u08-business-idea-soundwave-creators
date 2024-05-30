import { Request, Response } from "express";
// import { IAlbum } from '../interfaces/IAlbum';

import Album, { IAlbum } from "../models/albums";

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

export const getAllAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await readAll();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Failed to get albums", error });
  }
};

/*export const addAlbum = async (req: Request, res: Response) => {
  try {
    const { id, title, artist, releaseYear, genre, tracks } = req.body;
    const result = await create({ id, title, artist, releaseYear, genre, tracks });
    res.status(201).json({ message: "Album created successfully", album: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to create album", error });
  }
};*/

export const getAlbum = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const album = await read(id);
    if (album) {
      res.status(200).json(album);
    } else {
      res.status(404).json({ message: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get album", error });
  }
};

/*export const updateAlbum = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, artist, releaseYear, genre, tracks } = req.body;
    const updatedAlbum = await update(id, { id: Number(id), title, artist, releaseYear, genre, tracks });
    if (updatedAlbum) {
      res.status(200).json({ message: "Update succeeded", updatedAlbum });
    } else {
      res.status(404).json({ message: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update album", error });
  }
};*/

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
