"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const songscontroller_1 = require("../controllers/songscontroller"); // Adjust the path as needed
const router = (0, express_1.Router)();
router.get('/songs', songscontroller_1.getAllSongs);
router.get('/songs/:albumId', songscontroller_1.getSongsByAlbumId);
router.delete('/:id', songscontroller_1.deleteSong); // Add route for deleting a song by ID
exports.default = router;
