import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiChevronDown, FiHeart } from "react-icons/fi";
import axios from "axios";

import musicBanner from "../../images/music-banner.jpg";
import musicbanner2 from "../../images/music-banner2.jpg";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  releaseDate: string;
  genre: string;
  duration: string;
  trackNumber: number;
  albumId: number;
}

const GenrePage: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [songs, setSongs] = useState<Song[]>([]);
  const { genre } = useParams<{ genre: string }>();

  useEffect(() => {
    if (genre) {
      fetchSongsByGenre(genre);
    }
  }, [genre]);

  const fetchSongsByGenre = async (genre: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/songs?genre=${genre}`
      );
      setSongs(response.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleAddToPlaylist = (songId: string) => {
    console.log("Adding song to playlist:", songId);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-primary text-text shadow-secondary">
      {genre && (
        <>
          <div className="relative mb-10 mt-10 flex justify-center items-center space-x-0">
            <img
              src={musicBanner}
              alt="Music Banner"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 sm:max-h-40 md:max-h-48 lg:max-h-56 xl:max-h-64 rounded-md shadow-secondary object-cover"
            />
            <img
              src={musicbanner2}
              alt="Another Image"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 sm:max-h-30 md:max-h-48 lg:max-h-56 xl:max-h-64 rounded-md shadow-secondary object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white font-bold sm:text-1xl lg:text-4xl text-center drop-shadow-md">
                Dive into the variety of fantastic genres we offer!
              </h1>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center">
            Songs in {genre} Genre:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {songs.slice(0, showMore ? songs.length : 8).map((song) => (
              <div
                key={song._id}
                className="p-3 border border-black rounded-xl bg-gradient-to-b  from-secondary to-secondary-light flex flex-col items-center shadow-md relative"
              >
                <FiHeart
                  className="absolute top-2 right-2 text-white cursor-pointer hover:text-red-500"
                  size={24}
                  onClick={() => handleAddToPlaylist(song._id)}
                />
                <img
                  src={song.albumImageUrl}
                  alt={song.title}
                  className="w-20 h-20 bg-gray-300 mb-2 rounded-lg shadow-md sm:w-24 sm:h-24"
                />
                <div className="text-center text-black">
                  <h3 className="text-xs font-semibold sm:text-sm">
                    {song.title}
                  </h3>
                  <p className="text-xs sm:text-sm">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            {!showMore && (
              <button
                onClick={handleToggleShowMore}
                className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center"
              >
                <FiChevronDown size={24} />
                <span className="ml-2">Show More</span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GenrePage;
