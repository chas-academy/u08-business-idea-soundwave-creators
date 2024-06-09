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
exports.deleteArtist = exports.updateArtist = exports.createArtist = exports.getArtistById = exports.getAllArtists = void 0;
const artists_1 = __importDefault(require("../models/artists"));
// Function to get all artists
const getAllArtists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const artists = yield artists_1.default.find({});
        res.status(200).json({ success: true, data: artists });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get artists', error });
    }
});
exports.getAllArtists = getAllArtists;
// Function to get a single artist by ID
const getArtistById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const artist = yield artists_1.default.findById(req.params.id);
        if (artist) {
            res.status(200).json({ success: true, data: artist });
        }
        else {
            res.status(404).json({ success: false, message: 'Artist not found' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get artist', error });
    }
});
exports.getArtistById = getArtistById;
// Function to create a new artist
const createArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, imageURL, twitter, instagram } = req.body;
        const newArtist = new artists_1.default({ name, imageURL, twitter, instagram });
        const savedArtist = yield newArtist.save();
        res.status(201).json({ success: true, data: savedArtist });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Failed to create artist', error });
    }
});
exports.createArtist = createArtist;
// Function to update an artist by ID
const updateArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, imageURL, twitter, instagram } = req.body;
        const updatedArtist = yield artists_1.default.findByIdAndUpdate(req.params.id, { name, imageURL, twitter, instagram }, { new: true, runValidators: true });
        if (updatedArtist) {
            res.status(200).json({ success: true, data: updatedArtist });
        }
        else {
            res.status(404).json({ success: false, message: 'Artist not found' });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Failed to update artist', error });
    }
});
exports.updateArtist = updateArtist;
// Function to delete an artist by ID
const deleteArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedArtist = yield artists_1.default.findByIdAndDelete(req.params.id);
        if (deletedArtist) {
            res.status(200).json({ success: true, message: 'Artist deleted', data: deletedArtist });
        }
        else {
            res.status(404).json({ success: false, message: 'Artist not found' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete artist', error });
    }
});
exports.deleteArtist = deleteArtist;
