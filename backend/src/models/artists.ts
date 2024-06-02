import { Schema, model, Document } from 'mongoose';

// Define an interface representing a document in MongoDB.
 export interface IArtist extends Document {
  _id: string;
   name: string;
    biography: string;
    imageUrl: string;
}

// Create a Schema corresponding to the document interface.
const ArtistSchema = new Schema<IArtist>(
  {
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
  },
  { timestamps: true }
);

// Create a Model.
const artists = model<IArtist>('Artists', ArtistSchema);

export default artists;
