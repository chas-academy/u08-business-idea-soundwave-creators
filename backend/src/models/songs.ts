// src/models/songModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ISong extends Document {
  title: string;
  artist: string;
  albumId: mongoose.Types.ObjectId;
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
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    albumId: { type: Schema.Types.ObjectId, ref: 'Album', required: true },
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

const Song = mongoose.model<ISong>('Song', songSchema);

export default Song;
