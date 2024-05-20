// routes/songs.js
const express = require('express');
const router = express.Router();
const externalMusicService = require('../services/externalMusicService'); // This will interface with the external API

// Fetch all songs from the external API
router.get('/', externalMusicService.getAllSongs);

// Fetch a single song by ID from the external API
router.get('/:id', externalMusicService.getSongById);

module.exports = router;
