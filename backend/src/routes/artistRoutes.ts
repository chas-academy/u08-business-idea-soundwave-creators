import { Router } from 'express';
import {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
} from '../controllers/artistscontroller'; // Adjust the path as needed
import artists from "../models/artists";

const router = Router();

router.get('/getAll', getAllArtists);
router.get('/getOne/:id', getArtistById);
router.post('/save', createArtist);
router.put('/update/:id', updateArtist);
router.delete('/delete/:id', deleteArtist);

router.get('/search', async (req, res) => {
  const { query, type } = req.query;
  console.log(query, type);

  if (!query || !type) {
    return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string
console.log(type === "artist" )
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


