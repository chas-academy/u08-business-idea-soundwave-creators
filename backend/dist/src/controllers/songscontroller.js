"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSong = exports.getSongsByAlbumId = exports.getAllSongs = void 0;
const songs_1 = __importDefault(require("../models/songs"));
//import mongoose from 'mongoose';
const getAllSongs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const songs = yield songs_1.default.find({});
        res.status(200).json(songs);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get songs", error });
    }
});
exports.getAllSongs = getAllSongs;
const getSongsByAlbumId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(typeof Number(req.params.albumId));
        const songs = yield songs_1.default.find({ albumId: Number(req.params.albumId) });
        console.log(songs);
        res.json(songs);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getSongsByAlbumId = getSongsByAlbumId;
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
const deleteSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const songId = req.params.id;
        yield songs_1.default.findByIdAndDelete(songId);
        res.status(200).json({ message: 'Song deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting song:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteSong = deleteSong;
