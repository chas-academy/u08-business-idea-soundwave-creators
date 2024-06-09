"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artistscontroller_1 = require("../controllers/artistscontroller"); // Adjust the path as needed
const router = (0, express_1.Router)();
router.get('/getAll', artistscontroller_1.getAllArtists);
router.get('/getOne/:id', artistscontroller_1.getArtistById);
router.post('/save', artistscontroller_1.createArtist);
router.put('/update/:id', artistscontroller_1.updateArtist);
router.delete('/delete/:id', artistscontroller_1.deleteArtist);
// router.get('/search', async (req, res) => {
//   const { query, type } = req.query;
//   console.log(query, type);
//   if (!query || !type) {
//     return res.status(400).json({ message: 'Query and type are required' });
//   }
//   const queryString = query.toString(); // Convert query to string
// console.log(type === "artist" )
//   try {
//     let searchResult;
//     if (type === 'artist') {
//       searchResult = await artists.find({ name: new RegExp(queryString, 'i') });
//     } else {
//       return res.status(400).json({ message: 'Invalid search type' });
//     }
//     res.json(searchResult);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
exports.default = router;
