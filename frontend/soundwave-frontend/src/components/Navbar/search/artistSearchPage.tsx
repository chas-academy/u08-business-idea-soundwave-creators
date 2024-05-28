
import React, { useEffect, useState } from 'react';
import { fetchSearchResultsByArtist, ArtistResult } from '../../../api/SearchApi'; 

// interface SearchResult {
//   _id: string;
//   title: string;
//   artist: string;
//   album: string;
//   albumImageUrl: string;
//   releaseDate: string;
//   genre: string;
//   duration: string;
//   trackNumber: number;
//   albumId: number;
// }

// interface ArtistResult {
//   _id: string;
//   name: string;
//   biography: string;
//   albums:AlbumResult [];
//   popularSongs: SearchResult[];
//   imageUrl: string;
// }

// interface AlbumResult {
//   _id: string;
//   title: string;
//   artist: string;
//   release_date: string;
//   genre: string;
//   tracklist: { title: string, duration: string }[];
//   album_cover: string;
//   other_details: {
//     producer: string;
//     label: string;
//     certifications: string;
//   };
//   singles: { title: string, release_date: string }[];
//   options: {
//     play_album: string;
//     save_album: string;
//     explore_songs: string;
//   };
// }
interface ArtistSearchPageProps {
  searchQuery: string;
}

const ArtistSearchPage: React.FC<ArtistSearchPageProps> = ({ searchQuery }) => {
  const [artistResults, setArtistResults] = useState<ArtistResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchSearchResultsByArtist(searchQuery); // Fetch artist results based on the search query
        setArtistResults(results);
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
    <div className="container mx-auto px-4 mt-8 bg-primary p-8 rounded shadow-secondary">
      <h2 className="text-3xl font-semibold mb-6">Artist Search Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
  ) : !Array.isArray(artistResults) ? (
  <p>No search results found.</p>
      ) : artistResults.length === 0 ? (
        <p>No artist results found.</p>
      ) : (
        <div>
         {artistResults && artistResults.map((artist) => (
  <div key={artist._id} className="bg-white rounded-lg p-4 shadow-secondary">
    <img src={artist.imageUrl} alt={artist.name} className="w-full mb-4" />
    <h3 className="text-xl font-semibold">{artist.name}</h3>
    <p className="text-gray-600">Biography: {artist.biography}</p>
    <h4 className="text-lg font-semibold mt-4">Popular Songs</h4>
    <ul>
    {artist.popularSongs && Array.isArray(artist.popularSongs) && artist.popularSongs.map((song, index) => (
  <li key={index}>{song.title}</li>
))}

    </ul>
    <h4 className="text-lg font-semibold mt-4">Popular Albums</h4>
    <ul>
    {artist.albums && Array.isArray(artist.albums) && artist.albums.map((album, index) => (
  <li key={index}>{album.title}</li>
))}

    </ul>
    {/* You can display albums similarly */}
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default ArtistSearchPage;