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
exports.deleteAlbum = exports.getAlbum = exports.getAllAlbums = void 0;
// import { IAlbum } from '../interfaces/IAlbum';
// import Album, { IAlbum } from "../models/albums";
const albums_1 = __importDefault(require("../models/albums"));
// CRUD operations
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield albums_1.default.create(data);
});
const readAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const albums = yield albums_1.default.find({});
    return albums;
});
const read = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield albums_1.default.findById(id);
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield albums_1.default.findByIdAndUpdate(id, data, { new: true });
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield albums_1.default.findByIdAndDelete(id);
});
// Controllers
const getAllAlbums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const albums = yield readAll();
        res.status(200).json(albums);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get albums", error });
    }
});
exports.getAllAlbums = getAllAlbums;
const getAlbum = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const album = yield read(id);
        if (album) {
            res.status(200).json(album);
        }
        else {
            res.status(404).json({ message: "Album not found" });
        }
        // res.status(404).json({message:"testing mongoose"})
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get album", error });
    }
});
exports.getAlbum = getAlbum;
const deleteAlbum = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedAlbum = yield deleteOne(id);
        if (deletedAlbum) {
            res.status(200).json({ message: "Album deleted", deletedAlbum });
        }
        else {
            res.status(404).json({ message: "Album not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete album", error });
    }
});
exports.deleteAlbum = deleteAlbum;
