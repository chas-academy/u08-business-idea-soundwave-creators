import mongoose, { Document, Schema } from 'mongoose';

// Define an interface representing an album document in MongoDB.
interface IAlbum extends Document {
  name: string;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create a Schema corresponding to the document interface.
const albumSchema: Schema<IAlbum> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a Model.
const Album = mongoose.model<IAlbum>('Album', albumSchema);

export default Album;
