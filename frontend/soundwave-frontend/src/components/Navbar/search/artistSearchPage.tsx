
/*import React, { useEffect, useState } from 'react';
import { searchArtists, ArtistResult } from '../../../api/SearchApi'; 

interface ArtistSearchPageProps {
  searchQuery: string;
}

const ArtistSearchPage: React.FC<ArtistSearchPageProps> = ({ searchQuery }) => {
  const [artistResults, setArtistResults] = useState<ArtistResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

 // Retrieve search query and results from local storage
 const savedQuery = localStorage.getItem('searchQuery');
 const savedResults = JSON.parse(localStorage.getItem('artistResults') || '[]');

 if (savedQuery && savedResults.length > 0) {
   setArtistResults(savedResults);
 }


    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await searchArtists(searchQuery); // Fetch artist results based on the search query
        setArtistResults(results);

          // Save query and results to local storage
          localStorage.setItem('searchQuery', searchQuery);
          localStorage.setItem('artistResults', JSON.stringify(results));
       
      } catch (error) {
        setError('Failed to fetch artist results. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);


    return (
      <div className=" mx-auto px-4 bg-primary p-8  shadow-secondary">
        
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : !Array.isArray(artistResults) ? (
          <p className="text-center text-gray-600">No search results found.</p>
        ) : artistResults.length === 0 ? (
          <p className="text-center text-gray-600">No artist results found.</p>
        ) : (
          <div className="max-w-2xl mx-auto space-y-6">
            {artistResults.map((artist) => (
              <div key={artist._id} className="bg-primary rounded-lg p-6 shadow-secondary">
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
            ))}
          </div>
        )}
      </div>
    );
  };

export default ArtistSearchPage;*/

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

const ArtistSearchPage: React.FC = () => {
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

export default ArtistSearchPage;