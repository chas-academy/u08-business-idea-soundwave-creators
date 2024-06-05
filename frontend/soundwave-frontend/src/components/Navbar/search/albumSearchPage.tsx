import React, { useEffect, useState } from 'react';
import { searchAlbums, AlbumResult } from '../../../api/SearchApi';


interface AlbumSearchPageProps {
  searchQuery: string;
}

const AlbumSearchPage: React.FC<AlbumSearchPageProps> = ({ searchQuery }) => {
  const [albumResults, setAlbumResults] = useState<AlbumResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

             // Save query and results to local storage
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

    return (
      <div className=" mx-auto px-4 bg-primary p-8 shadow-secondary ">
        <div className='max-w-2xl mx-auto'>
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
                <div key={album._id} className="bg-primary shadow-secondary rounded-lg p-6 ">
                  <h2 className="md:text-2xl text-xl lg:text-2xl text-secondary mb-4 "> {album.name}</h2>
                  <img src={album.album_cover} alt={album.name} className="w-full h-64 object-cover rounded-md mb-4" />
                  {/* <h3 className="text-2xl font-semibold mb-2">{album.name}</h3> */}
                  <p className="text-gray-600 mb-1">Artist: {album.artist}</p>
                  <p className="text-gray-600 mb-1">Release Date: {album.release_date}</p>
                  <p className="text-gray-600 mb-1">Genre: {album.genre}</p>
                  <h4 className="text-lg text-secondary mt-4">Tracklist</h4>
                  <ul className="list-disc list-inside ml-4">
                    {album.tracklist.map((track, index) => (
                      <li className='text-gray-600 ' key={index}>{track.title} - {track.duration}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg text-secondary mt-4">Producer</h4>
                  <p className="text-gray-600">{album.other_details.producer}</p>
                  <h4 className="text-lg text-secondary mt-4">Label</h4>
                  <p className="text-gray-600">{album.other_details.label}</p>
                  <h4 className="text-lg text-secondary mt-4">Certifications</h4>
                  <p className="text-gray-600">{album.other_details.certifications}</p>
                  {/* <h4 className="text-lg text-secondary mt-4">Singles</h4> */}
                  <ul className="list-disc list-inside ml-4">
                    {album.singles.map((single, index) => (
                      <li key={index}>{single.title} - {single.release_date}</li>
                    ))}
                  </ul>
                  {/* <div className="mt-4 flex space-x-4">
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
