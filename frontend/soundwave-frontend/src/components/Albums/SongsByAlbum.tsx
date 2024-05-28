import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Song {
    _id: string;
    title: string;
    duration: string;
    artist: string;
    genre: string[];
}

const SongsByAlbum: React.FC = () => {
    const { albumId } = useParams<{ albumId: string }>();
    const [songs, setSongs] = useState<Song[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const res = await axios.get<Song[]>(`http://localhost:3000/api/songs/songs/${albumId}`);
                console.log(res.data);
                setSongs(res.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch songs');
            }
        };

        fetchSongs();
    }, [albumId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="songs-list">
            <h2>Songs</h2>
            <ul>
                {songs.map(song => (
                    <li key={song._id}>
                        <h3>{song.title}</h3>
                        <p>Artist: {song.artist}</p>
                        <p>Genre: {song.genre.join(', ')}</p>
                        <p>Duration: {song.duration} seconds</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongsByAlbum;
