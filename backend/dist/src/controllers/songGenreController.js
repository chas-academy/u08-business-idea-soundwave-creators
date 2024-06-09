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
exports.getSongsByGenre = void 0;
const song_model_1 = __importDefault(require("../models/song.model"));
const getSongsByGenre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = req.query.genre;
    if (!genre) {
        res.status(400).send("Genre query parameter is required");
        return;
    }
    try {
        const songs = yield song_model_1.default.find({ genre: genre });
        res.json(songs);
    }
    catch (error) {
        console.error("Error fetching songs:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getSongsByGenre = getSongsByGenre;
