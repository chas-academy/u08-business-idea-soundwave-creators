// // routes/songs.ts

// import express, { Request, Response } from 'express';
// import songs from '../models/songs';

// const router = express.Router();

// // Search route
// router.get('/search', async (req: Request, res: Response) => {
//   const { query, type } = req.query;

//   if (!query || !type) {
//     return res.status(400).json({ message: 'Query and type are required' });
//   }

//   const queryString = query.toString(); // Convert query to string

//   try {
//     let searchResult;
//     if (type === 'artist') {
//       searchResult = await songs.find({ artist: new RegExp(queryString, 'i') });
//     } else if (type === 'title') {
//       searchResult = await songs.find({ title: new RegExp(queryString, 'i') });
//     } else {
//       return res.status(400).json({ message: 'Invalid search type' });
//     }

//     res.json(searchResult);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// export default router;

// routes/songs.ts

import express, { Request, Response } from 'express';
import songs from '../models/songs';

const router = express.Router();

// Search route
router.get('/search', async (req: Request, res: Response) => {
  const { query, type } = req.query;

  if (!query || !type) {
    return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string

  try {
    let searchResult;
    if (type === 'artist') {
      searchResult = await songs.find({ artist: new RegExp(queryString, 'i') });
    } else if (type === 'title') {
      searchResult = await songs.find({ title: new RegExp(queryString, 'i') });
    } else if (type === 'both') {
      // Search by both title and artist
      searchResult = await songs.find({
        $or: [
          { title: new RegExp(queryString, 'i') },
          { artist: new RegExp(queryString, 'i') },
        ],
      });
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
