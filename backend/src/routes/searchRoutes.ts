
import express from 'express';
import { searchAlbums, searchArtists, searchTitles } from '../controllers/searchcontroller';
import songs from '../models/songs';
// import albumSongs from '../models/albumSongs';
const router = express.Router();

router.get('/albums', searchAlbums);
router.get('/artists', searchArtists);
router.get('/titles', searchTitles);


export default router;