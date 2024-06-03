 /*import React, { useEffect, useState } from 'react';
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
                   <h4 className="text-lg text-secondary mt-4">Singles</h4>
                   <ul className="list-disc list-inside ml-4">
                     {album.singles.map((single, index) => (
                       <li key={index}>{single.title} - {single.release_date}</li>
                     ))}
                   </ul>
                   <div className="mt-4 flex space-x-4">
                     <a href={album.options.play_album} className="text-blue-500 hover:underline">Play Album</a>
                     <a href={album.options.save_album} className="text-blue-500 hover:underline">Save Album</a>
                     <a href={album.options.explore_songs} className="text-blue-500 hover:underline">Explore Songs</a>
                   </div>
                 </div>
               ))}
             </div>
           )}
         </div>
       </div>
     );
   };

 export default AlbumSearchPage;*/


// src/components/Navbar/search/AlbumSearchPage.tsx

// src/components/PopularAlbum.tsx

// src/components/Navbar/search/AlbumSearchPage.tsx


// src/components/Navbar/search/AlbumSearchPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Album {
  _id: string;
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

const AlbumSearchPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<Album>(`http://localhost:3000/api/albums/${albumId}`);
        setAlbum(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch album details');
      } finally {
        setLoading(false);
      }
    };

    if (albumId) {
      fetchAlbum();
    }
  }, [albumId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!album) {
    return <div>No album found</div>;
  }

  return (
    <div className="mx-auto px-4 bg-primary p-8 shadow-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="bg-primary shadow-secondary rounded-lg p-6">
            <h2 className="md:text-2xl text-xl lg:text-2xl text-secondary mb-4">{album.name}</h2>
            <img src={album.album_cover} alt={album.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-gray-600 mb-1">Artist: {album.artist}</p>
            <p className="text-gray-600 mb-1">Release Date: {album.release_date}</p>
            <p className="text-gray-600 mb-1">Genre: {album.genre}</p>
            <h4 className="text-lg text-secondary mt-4">Tracklist</h4>
            <ul className="list-disc list-inside ml-4">
              {album.tracklist.map((track, index) => (
                <li className='text-gray-600' key={index}>{track.title} - {track.duration}</li>
              ))}
            </ul>
            <h4 className="text-lg text-secondary mt-4">Producer</h4>
            <p className="text-gray-600">{album.other_details.producer}</p>
            <h4 className="text-lg text-secondary mt-4">Label</h4>
            <p className="text-gray-600">{album.other_details.label}</p>
            <h4 className="text-lg text-secondary mt-4">Certifications</h4>
            <p className="text-gray-600">{album.other_details.certifications}</p>
            <h4 className="text-lg text-secondary mt-4">Singles</h4>
            <ul className="list-disc list-inside ml-4">
              {album.singles.map((single, index) => (
                <li key={index}>{single.title} - {single.release_date}</li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href={album.options.play_album} className="text-blue-500 hover:underline">Play Album</a>
              <a href={album.options.save_album} className="text-blue-500 hover:underline">Save Album</a>
              <a href={album.options.explore_songs} className="text-blue-500 hover:underline">Explore Songs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchPage;
