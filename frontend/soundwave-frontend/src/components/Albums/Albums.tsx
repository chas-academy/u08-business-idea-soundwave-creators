import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Album {
    _id: string;
    name: string;
    artist: string;
    imageURL: string;
    releaseDate: string;
    genre: string;
    popularity: number;
}

const Albums: React.FC = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const res = await axios.get<Album[]>('http://localhost:3000/api/albums/getAll');
                setAlbums(res.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch albums');
            }
        };

        fetchAlbums();
    }, []);

    const handleAlbumClick = (albumId: string) => {
        navigate(`/albums/${albumId}/songs`);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="albums-list">
            <h2>Albums</h2>
            <ul>
                {albums.map(album => (
                    <li key={album._id} onClick={() => handleAlbumClick(album._id)} style={{ cursor: 'pointer'}}>
                        <h3>{album.name}</h3>
                        <p>Artist: {album.artist}</p>
                        {/* <img src={album.imageURL} alt={album.name} /> */}
                        <img src={album.imageURL} alt={album.name} style={{ width: '100px', height: '100px' }} />
                        <p>Genre: {album.genre}</p>
                        <p>Popularity: {album.popularity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;
