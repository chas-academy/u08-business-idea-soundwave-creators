import { IAlbum } from "../interfaces/IAlbum";
import Album from "../models/album";

const create = async (data: IAlbum) => {
  return await Album.create(data);
};
const readAll = async () => {
  const albums = await Album.find({});
  return albums;
};
const read = async (id: any) => {
  return await Album.findById(id);
};
const update = async (id: any, data: IAlbum) => {
  return await Album.findByIdAndUpdate(id, data, { new: true });
};
const deleteOne = async (id: any) => {
  return await Album.findByIdAndDelete(id);
};

export const getAllAlbums = async (req: any, res: any) => {
  const albums = await readAll();
  res.status(200).json(albums);
};
export const addAlbum = async (req: any, res: any) => {
  const { title, author, publisher, read } = req.body;

  const result = await create({ title, author, publisher, read });

  res.status(201).json({ message: "Album created successfully", book: result });
};
export const getAlbum = async (req: any, res: any) => {
  const id = req.params.id;
  const album = await read(id);

  res.status(200).json(album);
};
export const updateAlbum = async (req: any, res: any) => {
  const { title, author, publisher, read } = req.body;
  const id = req.params.id;

  const updatedAlbum = await update(id, { title, author, publisher, read });

  res
    .status(200)
    .json({ message: "Update succeeded", updatedBook: updatedAlbum });
};
export const deleteAlbum = async (req: any, res: any) => {
  const id = req.params.id;

  const deletedAlbum = await deleteOne(id);

  res.status(200).json({ message: "Album deleted", deletedBook: deletedAlbum });
};