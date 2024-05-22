import { Router } from 'express';
import {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
} from '../controllers/artistscontroller'; // Adjust the path as needed

const router = Router();

router.get('/getAll', getAllArtists);
router.get('/getOne/:id', getArtistById);
router.post('/save', createArtist);
router.put('/update/:id', updateArtist);
router.delete('/delete/:id', deleteArtist);

export default router;
