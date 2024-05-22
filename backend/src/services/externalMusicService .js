// services/externalMusicService.js
const axios = require('axios');

const API_BASE_URL = 'https://api.externalmusic.com/v1';

const getAllSongs = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/songs`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

const getSongById = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/songs/${req.params.id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

module.exports = {
  getAllSongs,
  getSongById
};
