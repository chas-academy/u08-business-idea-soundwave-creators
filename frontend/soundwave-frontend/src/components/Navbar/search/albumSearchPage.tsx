import React, { useEffect, useState } from 'react';
import { searchAlbums, AlbumResult, SearchResult} from '../../../api/SearchApi';
import { useNavigate } from "react-router-dom";

interface AlbumSearchPageProps {
  searchQuery: string;
}

const AlbumSearchPage: React.FC<AlbumSearchPageProps> = ({ searchQuery }) => {
  const [albumResults, setAlbumResults] = useState<AlbumResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
  // Retrieve search query and results from local storage
  const savedQuery = localStorage.getItem('searchQuery');
  const savedResults = JSON.parse(localStorage.getItem('albumResults') || '[]');

  if (savedQuery && savedResults.length > 0) {
    setAlbumResults(savedResults);
  }


    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await searchAlbums(searchQuery); // Fetch album results based on the search query
        setAlbumResults(results);

            //  // Save query and results to local storage
             localStorage.setItem('searchQuery', searchQuery);
             localStorage.setItem('albumResults', JSON.stringify(results));
           
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

  const handlePlaySong = (track: SearchResult) => {
    navigate("/musicplayer", { state: { trackId: track._id } });
  };
  

  return (
    <div className="mx-auto px-4 bg-primary p-8 shadow-secondary">
      <div className='max-w-3xl mx-auto'>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : !Array.isArray(albumResults) ? (
          <p className="text-center text-gray-600">No search results found.</p>
        ) : albumResults.length === 0 ? (
          <p className="text-center text-gray-600">No album results found.</p>
        ) : (
          <div className="space-y-6">
            {albumResults.map((album) => (
              <div key={album._id} className="bg-primary shadow-secondary rounded-lg p-6">
                <h2 className="md:text-2xl text-xl lg:text-2xl text-secondary mb-4"> {album.name}</h2>
                <img src={album.album_cover} alt={album.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-gray-600 mb-1">Artist: {album.artist}</p>
                <p className="text-gray-600 mb-1">Release Date: {album.release_date}</p>
                <p className="text-gray-600 mb-1">Genre: {album.genre}</p>
                <h4 className="text-lg text-secondary mt-4">Producer</h4>
                <p className="text-gray-600">{album.other_details.producer}</p>
                <h4 className="text-lg text-secondary mt-4">Label</h4>
                <p className="text-gray-600">{album.other_details.label}</p>
                <h4 className="text-lg text-secondary mt-4">Certifications</h4>
                <p className="text-gray-600">{album.other_details.certifications}</p>
                <h4 className="sm:block sm:mt-7 pt-2 text-xl font-semibold text-secondary text-center">{album.name} Songs</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mt-[-5rem] sm:mt-[-4rem] lg:mt-[-5rem]" >
                {Array.isArray(album.tracklist) ? (
                album.tracklist.map((track, index) => (
                  <div key={index} onClick={() => handlePlaySong(track)} className="p-3 shadow-secondary rounded-xl bg-gradient-to-b from-secondary to-secondary-light flex flex-col items-center relative cursor-pointer">
                    {/* <FiHeart
                      className="absolute top-2 right-2 text-white cursor-pointer hover:text-red-500"
                      size={24}
                      onClick={() => handleAddToPlaylist(track._id)}
                    /> */}
                    <img
                      src={track.albumImageUrl}
                      alt={track.title}
                      className="w-20 h-20 bg-gray-300 mb-2 rounded-lg shadow-md sm:w-24 sm:h-24"
                    />
                    <div className="text-center text-black">
                      <h3 className="text-xs font-semibold sm:text-sm">{track.title}</h3>
                      <p className="text-xs sm:text-sm">{track.artist}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className='text-gray-600'>Tracklist not available</p>
              )}
            </div>
       
                {/* <h4 className="text-lg text-secondary mt-4">Singles</h4>
                <ul className="list-disc list-inside ml-4">
                  {album.singles && album.singles.map((single, index) => (
                    <li key={index}>{single.title} - {single.release_date}</li>
                  ))}
                </ul>
                <div className="mt-4 flex space-x-4">
                  <a href={album.options.play_album} className="text-blue-500 hover:underline">Play Album</a>
                  <a href={album.options.save_album} className="text-blue-500 hover:underline">Save Album</a>
                  <a href={album.options.explore_songs} className="text-blue-500 hover:underline">Explore Songs</a>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumSearchPage; 