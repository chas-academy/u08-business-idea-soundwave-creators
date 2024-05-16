import React, { useEffect, useState } from "react";
import MusicService from "../../services/MusicService";
import { FiChevronDown, FiHeart } from "react-icons/fi"; // Import the heart icon

interface TrackWithAlbum {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
}

interface GenrePageProps {
  genres: string[];
}

const GenrePage: React.FC<GenrePageProps> = ({ genres }) => {
  const [tracks, setTracks] = useState<TrackWithAlbum[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    if (selectedGenre) {
      // Fetch tracks for the selected genre
      MusicService.searchTracksByGenre(selectedGenre).then(
        (data: TrackWithAlbum[]) => {
          setTracks(data);
        }
      );
    }
  }, [selectedGenre]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    setShowMore(false);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleAddToPlaylist = (songId: string) => {
    console.log("Adding song to playlist:", songId);
  };

  return (
    <div className="container mx-auto p-4 bg-primary text-text">
      <div className="mb-4">
        <label htmlFor="genreSelect" className="mr-2 text-white">
          Select Genre:
        </label>
        <select
          id="genreSelect"
          value={selectedGenre || ""}
          onChange={handleGenreChange}
          className="p-2 border rounded"
        >
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {selectedGenre && (
        <>
          <div className="mb-6 flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/031/532/383/non_2x/a-visual-of-music-waves-from-an-orange-background-free-photo.jpg"
              alt="Music Banner"
              className="w-full max-w-lg"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Songs in {selectedGenre} Genre:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {tracks.slice(0, showMore ? tracks.length : 8).map((track) => (
              <div
                key={track.id}
                className="p-4 border border-black rounded-xl bg-gradient-to-b bg-secondary flex flex-col items-center shadow-md relative"
              >
                <FiHeart
                  className="absolute top-2 right-2 bg-hover text-white cursor-pointer mt-2 mr-3 hover:text-red-500"
                  size={24}
                  onClick={() => handleAddToPlaylist(track.id)}
                />
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  className="w-16 h-16 object-cover mb-2 rounded-lg shadow-md md:w-24 md:h-24"
                />
                <div className="text-center text-black">
                  <h3 className="text-xs font-semibold md:text-sm">
                    {track.name}
                  </h3>
                  <p className="text-xs md:text-sm">
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8">
            {!showMore && (
              <button
                onClick={handleToggleShowMore}
                className="bg-gray-700 px-3 py-1 rounded-full"
              >
                <FiChevronDown size={24} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GenrePage;
