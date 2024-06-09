"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Create a Schema corresponding to the document interface.
const ArtistSchema = new mongoose_1.Schema({
    _id: String,
    name: {
        type: String,
        required: true,
    },
    biography: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });
// Create a Model.
const artists = (0, mongoose_1.model)('Artists', ArtistSchema);
exports.default = artists;
