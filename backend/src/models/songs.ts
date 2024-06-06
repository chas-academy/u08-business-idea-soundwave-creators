// src/models/songModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ISong extends Document {
  _id: string;
  title: string;
  artist: string;
  albumId: number;
  album: string;
  genre: string[];
  duration: number;
  release_year: number;
  file_url: string;
  created_at: Date;
  updated_at: Date;
}

const songSchema = new Schema<ISong>(
  {

    _id: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    albumId: { type: Number, ref: 'Album', required: true },
    album: { type: String, trim: true },
    genre: { type: [String], required: true },
    duration: { type: Number, required: true },
    release_year: { type: Number },
    file_url: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const songs = mongoose.model<ISong>('Songs', songSchema);

export default songs;