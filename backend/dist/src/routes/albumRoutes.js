"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albumcontroller_1 = require("../controllers/albumcontroller");
const router = (0, express_1.Router)();
router.get("/", albumcontroller_1.getAllAlbums);
router.get("/:id", albumcontroller_1.getAlbum);
router.delete("/:id", albumcontroller_1.deleteAlbum);
exports.default = router;
