
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Artist {
  _id: string;
  name: string;
  biography: string;
  imageUrl: string;
  popularSongs: { title: string }[];
  albums: { name: string }[];
}

const SingleArtistPage: React.FC = () => {
  const { artistName } = useParams<{ artistName: string }>();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtist = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<Artist>(`http://localhost:3000/api/artists/getOne/${artistName}`);
        console.log(res.data);
        setArtist(res.data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch artist details');
      } finally {
        setLoading(false);
      }
    };
  
    if (artistName) {
      fetchArtist();
    }
  }, [artistName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!artist) {
    return <div>No artist found</div>;
  }

    return (
    <div className="mx-auto px-4 bg-primary p-8 shadow-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="bg-primary shadow-secondary rounded-lg p-6">
                <h2 className="md:text-2xl text-xl lg:text-2xl text-secondary mb-4">{artist.name}</h2>
                <img src={artist.imageUrl} alt={artist.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-gray-600 mb-1">Biography: {artist.biography}</p>
                <h4 className="text-lg text-secondary mt-4">Popular Songs</h4>
                 <ul className="list-disc list-inside ml-4">
                  {artist.popularSongs.map((song, index) => (
                    <li key={index} className="text-gray-600">{song.title}</li>
                  ))}
                </ul> 
                <h4 className="text-lg text-secondary mt-4">Popular Albums</h4>
                 <ul className="list-disc list-inside ml-4">
                  {artist.albums.map((album, index) => (
                    <li key={index} className="text-gray-600">{album.name}</li>
                  ))}
                </ul> 
              </div>
          </div>
      </div>
      </div>
    );
  };

export default SingleArtistPage;