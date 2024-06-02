import { Router } from 'express';
import { Song } from '../models/song'; // Adjust the path if needed

const router = Router();

// Schema for liked songs (if needed)
interface LikedSong {
  songid: string;
  userid: string;
}

// Endpoint to handle adding liked songs
router.post('/api/song/addLikedSong', async (req, res) => {
  const { songid, userid } = req.body as LikedSong;

  // Implement logic to handle liked songs
  // For demonstration, we'll simply log the request and return a success message
  try {
    console.log(`User ${userid} liked song ${songid}`);

    // You can add the song to the user's liked songs in the database here

    res.json({ success: true, message: 'Song added to liked songs' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
