
// import mongoose, { Document, Schema } from 'mongoose';

// export interface IAlbum extends Document {
//   _id: number;
//   name: string;
//     artist: string;
//     release_date: string;
//     genre: string;
//     tracklist: { title: string, duration: string }[];
//     album_cover: string;
//     other_details: {
//         producer: string;
//         label: string;
//         certifications: string;
//     };
//     singles: { title: string, release_date: string }[];
//     options: {
//         play_album: string;
//         save_album: string;
//         explore_songs: string;
//     };
// }

// const albumSchema: Schema<IAlbum> = new Schema({
//     _id: String,
//     name: {
//         type: String,
//         required: true
//     },
//     artist: {
//         type: String,
//         required: true
//     },
//     release_date: {
//         type: String,
//         required: true
//     },
//     genre: {
//         type: String,
//         required: true
//     },
//     tracklist: [{
//         title: String,
//         duration: String
//     }],
//     album_cover: {
//         type: String,
//         required: true
//     },
//     other_details: {
//         producer: String,
//         label: String,
//         certifications: String
//     },
//     singles: [{
//         title: String,
//         release_date: String
//     }],
//     options: {
//         play_album: String,
//         save_album: String,
//         explore_songs: String
//     }
// });

//  const Album = mongoose.model<IAlbum>('Album', albumSchema);

//  export default Album;

/*import mongoose, { Document, Schema } from 'mongoose';

export interface IAlbum extends Document {
  _id: string;
  name: string;
  artist?: string;
  release_date?: string;
  genre?: string;
  tracklist?: { 
     title: string; duration: string 
    }[];
    // tracklist?: { songId: string;
    //   title: string; duration: string 
    //  }[];
  album_cover: string;
  other_details?: {
    producer: string;
    label: string;
    certifications: string;
  };
  singles?: { title: string; release_date: string }[];
  options?: {
    play_album: string;
    save_album: string;
    explore_songs: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const albumSchema: Schema = new Schema(
  {
    // _id: Number,
    _id: String,
    name: {
      type: String,
      required: true,
    },
    artist: String,
    release_date: String,
    genre: String,
    tracklist: [
      {
        // songId: String,
        title: String,
        duration: String,
      },
    ],

    // tracklist: [
    //   {
    //     title: String,
    //     duration: String,
    //     songId: { type: Schema.Types.ObjectId, ref: 'Song' } // Reference to Song model
    //   }
    // ],
    album_cover: {
      type: String,
      required: true,
    },
    other_details: {
      producer: String,
      label: String,
      certifications: String,
    },
    singles: [
      {
        title: String,
        release_date: String,
      },
    ],
    options: {
      play_album: String,
      save_album: String,
      explore_songs: String,
    },
  },
  { timestamps: true }
);

const albums = mongoose.model<IAlbum>('Albums', albumSchema);

export default albums;*/

import { Schema, model, Document } from "mongoose";

export interface IAlbum extends Document {
  _id: string;
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
}

const albumSchema = new Schema<IAlbum>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  artist: { type: String, required: true },
  release_date: { type: String, required: true },
  genre: { type: String, required: true },
  tracklist: [{ title: String, duration: String }],
  album_cover: { type: String, required: true },
  other_details: {
    producer: String,
    label: String,
    certifications: String,
  },
  singles: [{ title: String, release_date: String }],
});

const Album = model<IAlbum>("Album", albumSchema);

export default Album;

