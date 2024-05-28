import express from 'express';
import artists from '../../models/search/artists';

const router = express.Router();

// Artist search route
router.get('/search', async (req, res) => {
  const { query, type } = req.query;

  if (!query || !type) {
    return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string

  try {
    let searchResult;
    if (type === 'artist') {
      searchResult = await artists.find({ name: new RegExp(queryString, 'i') });
    } else {
      return res.status(400).json({ message: 'Invalid search type' });
    }

    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
