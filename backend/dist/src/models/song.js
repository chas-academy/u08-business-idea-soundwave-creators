"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const songSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    src: { type: String, required: true },
    cover: { type: String, required: true },
});
const Song = (0, mongoose_1.model)('Song', songSchema);
exports.default = Song;
