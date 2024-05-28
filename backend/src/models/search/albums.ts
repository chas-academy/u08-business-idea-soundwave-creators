import mongoose, { Document, Schema } from 'mongoose';

export interface IAlbum extends Document {
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

const AlbumSchema: Schema<IAlbum> = new Schema({
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

const albums = mongoose.model<IAlbum>('Album', AlbumSchema);
export default albums;
