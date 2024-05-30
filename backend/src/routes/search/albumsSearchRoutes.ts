/*import express from 'express';
import albums from '../../models/search/albums';

const router = express.Router();

// Album search route
router.get('/search', async (req, res) => {
  const { query, type } = req.query;

  if (!query || !type) {
    return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string
  console.log('Received search query:', queryString); // Log received search query

  try {
    let searchResult;
    if (type === 'album') {
      console.log(new RegExp(queryString, 'i'))
      searchResult = await albums.find({ name: new RegExp(queryString, 'i') });
    } else {
      return res.status(400).json({ message: 'Invalid search type' });
    }
    console.log('Search result:', searchResult); // Log search result before sending as response
  
    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;*/
