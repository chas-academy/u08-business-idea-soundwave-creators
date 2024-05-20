// controllers/playlistController.js
const Playlist = require('../models/playlist');

exports.createPlaylist = (req, res) => {
  const { name, songs } = req.body;
  new Playlist({
    name,
    songs,
    user_id: req.user.id
  }).save()
    .then(playlist => res.json(playlist))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getAllPlaylists = (req, res) => {
  Playlist.find({ user_id: req.user.id })
    .then(playlists => res.json(playlists))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getPlaylistById = (req, res) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      if (!playlist) return res.status(404).json({ error: 'Playlist not found' });
      res.json(playlist);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updatePlaylist = (req, res) => {
  const { name, songs } = req.body;
  Playlist.findByIdAndUpdate(req.params.id, { name, songs }, { new: true })
    .then(playlist => res.json(playlist))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deletePlaylist = (req, res) => {
  Playlist.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: 'Playlist deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};
