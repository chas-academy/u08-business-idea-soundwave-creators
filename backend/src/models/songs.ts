// models/Song.js
import mongoose, { Document, Schema } from 'mongoose';


export interface ISongs extends Document{
    title: string;
    artist: string;
    createdAt: Date;
    updatedAt: Date;

}

const SongSchema = new Schema<ISongs>({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  // other fields
});

// module.exports = mongoose.model('Song', SongSchema);
const SongModel = mongoose.model<ISongs>('Songs', SongSchema);
export default SongModel;
