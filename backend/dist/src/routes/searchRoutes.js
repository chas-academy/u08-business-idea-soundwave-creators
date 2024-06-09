"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchcontroller_1 = require("../controllers/searchcontroller");
// import albumSongs from '../models/albumSongs';
const router = express_1.default.Router();
router.get('/albums', searchcontroller_1.searchAlbums);
router.get('/artists', searchcontroller_1.searchArtists);
router.get('/titles', searchcontroller_1.searchTitles);
exports.default = router;
