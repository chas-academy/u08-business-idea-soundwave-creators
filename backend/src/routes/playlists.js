// routes/playlists.js
const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

// Create a new playlist
router.post('/', playlistController.createPlaylist);

// Get all playlists for a user
router.get('/', playlistController.getAllPlaylists);

// Get a single playlist by ID
router.get('/:id', playlistController.getPlaylistById);

// Update a playlist (e.g., change name, add/remove songs)
router.put('/:id', playlistController.updatePlaylist);

// Delete a playlist
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;
