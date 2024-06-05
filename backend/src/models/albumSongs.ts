// // Assuming you're using Mongoose for MongoDB
// import mongoose, { Schema, Document } from 'mongoose';

// // Define the schema for the album-songs collection
// export interface AlbumSong extends Document {
//     albumId: string;
//     title: string;
//     artist: string;
//     duration: string;
//     // Add more fields as needed
// }

// const AlbumSongSchema: Schema = new Schema({
//     albumId: { type: Schema.Types.ObjectId, ref: 'Album', required: true },
//     title: { type: String, required: true },
//     artist: { type: String, required: true },
//     duration: { type: String, required: true },
//     // Add more fields as needed
// });

// // Create the model for the album-songs collection
// const AlbumSongModel = mongoose.model<AlbumSong>('AlbumSong', AlbumSongSchema);

// export default AlbumSongModel;
