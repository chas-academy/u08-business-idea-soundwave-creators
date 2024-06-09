"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const songGenreController_1 = require("../controllers/songGenreController");
const router = (0, express_1.Router)();
router.get("/songs", songGenreController_1.getSongsByGenre);
exports.default = router;
