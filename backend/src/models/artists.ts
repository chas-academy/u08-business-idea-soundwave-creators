import { Schema, model, Document } from 'mongoose';

// Define an interface representing a document in MongoDB.
interface IArtist extends Document {
  name: string;
  imageURL: string;
  twitter: string;
  instagram: string;
}

// Create a Schema corresponding to the document interface.
const artistSchema = new Schema<IArtist>(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a Model.
const Artist = model<IArtist>('Artist', artistSchema);

export default Artist;
