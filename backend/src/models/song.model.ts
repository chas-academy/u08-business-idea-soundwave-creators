import mongoose, { Document, Schema } from "mongoose";

export interface ISong extends Document {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  releaseDate: string;
  genre: string;
  duration: string;
  trackNumber: number;
  albumId: number;
}

const SongSchema: Schema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  albumImageUrl: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: String, required: true },
  trackNumber: { type: Number, required: true },
  albumId: { type: Number, required: true },
});

export default mongoose.model<ISong>("Song", SongSchema);
