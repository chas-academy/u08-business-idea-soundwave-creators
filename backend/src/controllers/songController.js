// controllers/musicController.js
const externalMusicService = require('../services/externalMusicService');

exports.getAllSongs = (req, res) => {
  externalMusicService.getAllSongs()
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getSongById = (req, res) => {
  externalMusicService.getSongById(req.params.id)
    .then(song => {
      if (!song) return res.status(404).json({ error: 'Song not found' });
      res.json(song);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};
