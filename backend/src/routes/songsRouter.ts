import { Router } from 'express';
import {
    getAllSongs,
    getSongsByAlbumId
} from '../controllers/songscontroller'; // Adjust the path as needed

const router = Router();

router.get('/getAll', getAllSongs);
router.get('/songs/:albumId', getSongsByAlbumId);


export default router;
