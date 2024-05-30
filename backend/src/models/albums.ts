/*import mongoose, { Document, Schema } from 'mongoose';

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

export default Album;*/



 import mongoose, { Document, Schema } from 'mongoose';

export interface IAlbum extends Document {
  _id: number;
  name: string;
    artist: string;
    release_date: string;
    genre: string;
    tracklist: { title: string, duration: string }[];
    album_cover: string;
    other_details: {
        producer: string;
        label: string;
        certifications: string;
    };
    singles: { title: string, release_date: string }[];
    options: {
        play_album: string;
        save_album: string;
        explore_songs: string;
    };
}

const albumSchema: Schema<IAlbum> = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    tracklist: [{
        title: String,
        duration: String
    }],
    album_cover: {
        type: String,
        required: true
    },
    other_details: {
        producer: String,
        label: String,
        certifications: String
    },
    singles: [{
        title: String,
        release_date: String
    }],
    options: {
        play_album: String,
        save_album: String,
        explore_songs: String
    }
});
 /* name: string;
  album_cover: string;
  createdAt: Date;
  updatedAt: Date;
}

const albumSchema: Schema = new Schema(
  {
    _id: Number,
    name: {
      type: String,
      required: true,
    },
    album_cover: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);*/

 const albums = mongoose.model<IAlbum>('Album', albumSchema);

 export default albums;

