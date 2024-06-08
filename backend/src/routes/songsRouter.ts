import { Router } from 'express';
import {
    getAllSongs,
    getSongsByAlbumId,
    deleteSong,
    addLikedSong
} from '../controllers/songscontroller'; // Adjust the path as needed

const router = Router();

router.get('/songs', getAllSongs);
router.get('/songs/:albumId', getSongsByAlbumId);
router.delete('/:id', deleteSong); // Add route for deleting a song by ID


router.post('/addLikedSong', addLikedSong);

export default router;
