import React, { useEffect, useState } from 'react';
import { fetchSearchResultsByTitle, SearchResult } from '../../../api/SearchApi'; // Import fetchSearchResults from api.ts

interface SongSearchPageProps {
  searchQuery: string;
}

const SongSearchPage: React.FC<SongSearchPageProps> = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchSearchResultsByTitle(searchQuery); // Use fetchSearchResults from api.ts
        setSearchResults(results);
      } catch (error) {
        setError('Failed to fetch search results. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);
  
  return (
    <div className="container mx-auto px-4 mt-8 bg-primary p-8 rounded shadow-secondary">
      <h2 className="text-3xl font-semibold mb-6">Search Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
        ) : !Array.isArray(searchResults) ? (
  <p>No search results found.</p>
      ) : searchResults.length === 0 ? (
        <p>No search results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((song) => (
            <div key={song._id} className="bg-white rounded-lg p-4 shadow-secondary">
              <img src={song.albumImageUrl} alt={song.album} className="w-full mb-4" />
              <h3 className="text-xl font-semibold">{song.title}</h3>
              <p className="text-gray-600">Artist: {song.artist}</p>
              <p className="text-gray-600">Album: {song.album}</p>
              <p className="text-gray-600">Release Date: {song.releaseDate}</p>
              <p className="text-gray-600">Genre: {song.genre}</p>
              <p className="text-gray-600">Duration: {song.duration}</p>
              <p className="text-gray-600">Track Number: {song.trackNumber}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongSearchPage;