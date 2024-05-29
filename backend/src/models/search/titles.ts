// models/Song.js
import mongoose, { Document, Schema } from 'mongoose';


export interface ITitles extends Document{
  _id: number;
    title: string;
    artist: string;
    createdAt: Date;
    updatedAt: Date;

}

const SongSchema = new Schema<ITitles>({
  _id: String,
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
  // other fields
});

// module.exports = mongoose.model('Song', SongSchema);
const titles = mongoose.model<ITitles>('Songs', SongSchema);
export default titles;
