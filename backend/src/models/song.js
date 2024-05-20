// models/song.js
const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  album: { type: String, trim: true },
  genre: { type: [String], required: true }, // Array of strings for multiple genres
  duration: { type: Number, required: true }, // Duration in seconds
  release_year: { type: Number },
  file_url: { type: String, required: true }, // URL to the audio file
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Song', SongSchema);
