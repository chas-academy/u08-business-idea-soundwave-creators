import React, { useEffect, useState } from 'react';
import { fetchSearchResultsByAlbum, AlbumResult } from '../../../api/SearchApi';


interface AlbumSearchPageProps {
  searchQuery: string;
}

const AlbumSearchPage: React.FC<AlbumSearchPageProps> = ({ searchQuery }) => {
  const [albumResults, setAlbumResults] = useState<AlbumResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchSearchResultsByAlbum(searchQuery); // Fetch album results based on the search query
        setAlbumResults(results);
      } catch (error) {
        setError('Failed to fetch album results. Please try again.');
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
      <h2 className="text-3xl font-semibold mb-6">Album Search Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : !Array.isArray(albumResults) ? (
        <p>No search results found.</p>
      ) : albumResults.length === 0 ? (
        <p>No album results found.</p>
      ) : (
        <div>
          {albumResults.map((album) => (
            <div key={album._id} className="bg-white rounded-lg p-4 shadow-secondary">
              <img src={album.album_cover} alt={album.name} className="w-full mb-4" />
              <h3 className="text-xl font-semibold">{album.name}</h3>
              <p className="text-gray-600">Artist: {album.artist}</p>
              <p className="text-gray-600">Release Date: {album.release_date}</p>
              <p className="text-gray-600">Genre: {album.genre}</p>
              <h4 className="text-lg font-semibold mt-4">Tracklist</h4>
              <ul>
                {album.tracklist.map((track, index) => (
                  <li key={index}>{track.title} - {track.duration}</li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold mt-4">Producer</h4>
              <p className="text-gray-600">{album.other_details.producer}</p>
              <h4 className="text-lg font-semibold mt-4">Label</h4>
              <p className="text-gray-600">{album.other_details.label}</p>
              <h4 className="text-lg font-semibold mt-4">Certifications</h4>
              <p className="text-gray-600">{album.other_details.certifications}</p>
              <h4 className="text-lg font-semibold mt-4">Singles</h4>
              <ul>
                {album.singles.map((single, index) => (
                  <li key={index}>{single.title} - {single.release_date}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a href={album.options.play_album} className="mr-4">Play Album</a>
                <a href={album.options.save_album} className="mr-4">Save Album</a>
                <a href={album.options.explore_songs}>Explore Songs</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumSearchPage;
