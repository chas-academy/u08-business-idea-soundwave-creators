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
exports.searchTitles = exports.searchArtists = exports.searchAlbums = void 0;
const albums_1 = __importDefault(require("../models/albums"));
const artists_1 = __importDefault(require("../models/artists"));
const songs_1 = __importDefault(require("../models/songs"));
// import albumsongs from '../models/albumSongs';
const searchAlbums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, type } = req.query;
    if (!query || !type) {
        return res.status(400).json({ message: 'Query and type are required' });
    }
    const queryString = query.toString(); // Convert query to string
    console.log('Received search query:', queryString); // Log received search query
    try {
        let searchResult;
        if (type === 'album') {
            console.log(new RegExp(queryString, 'i'));
            searchResult = yield albums_1.default.find({ name: new RegExp(queryString, 'i') });
        }
        else {
            return res.status(400).json({ message: 'Invalid search type' });
        }
        console.log('Search result:', searchResult); // Log search result before sending as response
        res.json(searchResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.searchAlbums = searchAlbums;
// export const searchAlbums = async (req: Request, res: Response) => {
//   const { query, type } = req.query;
//   if (!query || !type) {
//       return res.status(400).json({ message: 'Query and type are required' });
//   }
//   const queryString = query.toString(); // Convert query to string
//   try {
//       let searchResult: (IAlbum | ISong)[] = [];
//       if (type === 'album') {
//           searchResult = await albums.find({ name: new RegExp(queryString, 'i') });
//       } else if (type === 'song') {
//           const song = await songs.findById(queryString); // Fetch song by songId
//           if (song) {
//               searchResult = [song];
//           }
//       } else {
//           return res.status(400).json({ message: 'Invalid search type' });
//       }
//       console.log('Search result:', searchResult); // Log search result before sending as response
//       res.json(searchResult);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//   }
// };
const searchArtists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, type } = req.query;
    if (!query || !type) {
        return res.status(400).json({ message: 'Query and type are required' });
    }
    const queryString = query.toString(); // Convert query to string
    try {
        let searchResult;
        if (type === 'artist') {
            searchResult = yield artists_1.default.find({ name: new RegExp(queryString, 'i') });
        }
        else {
            return res.status(400).json({ message: 'Invalid search type' });
        }
        res.json(searchResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.searchArtists = searchArtists;
const searchTitles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, type } = req.query;
    if (!query || !type) {
        return res.status(400).json({ message: 'Query and type are required' });
    }
    const queryString = query.toString(); // Convert query to string
    try {
        let searchResult;
        if (type === 'title') {
            searchResult = yield songs_1.default.find({ title: new RegExp(queryString, 'i') }); // Adjusted to use songs model
        }
        else {
            return res.status(400).json({ message: 'Invalid search type' });
        }
        res.json(searchResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.searchTitles = searchTitles;
