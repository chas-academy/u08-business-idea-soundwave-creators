import { Schema, model, Document } from 'mongoose';

interface ISong extends Document {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

const songSchema = new Schema<ISong>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  src: { type: String, required: true },
  cover: { type: String, required: true },
});

const Song = model<ISong>('Song', songSchema);

export default Song;
