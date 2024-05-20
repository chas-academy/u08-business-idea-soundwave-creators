// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FiChevronDown, FiHeart } from "react-icons/fi";

// interface TrackWithAlbum {
//   id: string;
//   name: string;
//   artists: { name: string }[];
//   album: {
//     images: { url: string }[];
//   };
// }

// const GenrePage: React.FC = () => {
//   const [tracks, setTracks] = useState<TrackWithAlbum[]>([]);
//   const [showMore, setShowMore] = useState<boolean>(false);
//   const { genre } = useParams<{ genre: string }>();

//   useEffect(() => {
//     if (genre) {
//       // Fetch tracks for the selected genre
//       MusicService.searchTracksByGenre(genre).then((data: TrackWithAlbum[]) => {
//         setTracks(data);
//       });
//     }
//   }, [genre]);

//   const handleToggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const handleAddToPlaylist = (songId: string) => {
//     console.log("Adding song to playlist:", songId);
//   };

//   return (
//     <div className="container mx-auto p-4 bg-primary text-text shadow-secondary">
//       {genre && (
//         <>
//           <div className="mb-6 flex justify-center">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/031/532/383/non_2x/a-visual-of-music-waves-from-an-orange-background-free-photo.jpg"
//               alt="Music Banner"
//               className="w-full max-w-lg"
//             />
//           </div>

//           <h2 className="text-xl font-semibold mb-2">
//             Songs in {genre} Genre:
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
//             {tracks.slice(0, showMore ? tracks.length : 8).map((track) => (
//               <div
//                 key={track.id}
//                 className="p-4 border border-black rounded-xl bg-gradient-to-b bg-secondary flex flex-col items-center shadow-md relative"
//               >
//                 <FiHeart
//                   className="absolute top-2 right-2 bg-hover text-white cursor-pointer mt-2 mr-3 hover:text-red-500"
//                   size={24}
//                   onClick={() => handleAddToPlaylist(track.id)}
//                 />
//                 <img
//                   src={track.album.images[0].url}
//                   alt={track.name}
//                   className="w-16 h-16 object-cover mb-2 rounded-lg shadow-md md:w-24 md:h-24"
//                 />
//                 <div className="text-center text-black">
//                   <h3 className="text-xs font-semibold md:text-sm">
//                     {track.name}
//                   </h3>
//                   <p className="text-xs md:text-sm">
//                     {track.artists.map((artist) => artist.name).join(", ")}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-6 md:mt-8">
//             {!showMore && (
//               <button
//                 onClick={handleToggleShowMore}
//                 className="bg-gray-700 px-3 py-1 rounded-full"
//               >
//                 <FiChevronDown size={24} />
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default GenrePage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FiChevronDown, FiHeart } from "react-icons/fi";

// Correct the import path based on your file structure
import musicBanner from "../../images/music-banner.jpg";

const GenrePage: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { genre } = useParams<{ genre: string }>();

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleAddToPlaylist = (songId: string) => {
    console.log("Adding song to playlist:", songId);
  };

  const placeholderTracks = Array(8).fill(null); // Placeholder array for UI structure

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-primary text-text shadow-secondary">
      {genre && (
        <>
          <div className="mb-6 flex justify-center relative">
            <img
              src={musicBanner}
              alt="Music Banner"
              className="w-full max-w-lg rounded-md shadow-secondary"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-1xl font-bold sm:text-4xl  lg:text-xl   text-center drop-shadow-md">
                Discover our different types of fantastic genres!
              </h1>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center">
            Songs in {genre} Genre:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholderTracks
              .slice(0, showMore ? placeholderTracks.length : 8)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-3 border border-black rounded-xl bg-gradient-to-b  from-secondary to-secondary-light flex flex-col items-center shadow-md relative"
                >
                  <FiHeart
                    className="absolute top-2 right-2 text-white cursor-pointer hover:text-red-500"
                    size={24}
                    onClick={() => handleAddToPlaylist(`placeholder-${index}`)}
                  />
                  <div className="w-20 h-20 bg-gray-300 mb-2 rounded-lg shadow-md sm:w-24 sm:h-24"></div>
                  <div className="text-center text-black">
                    <h3 className="text-xs font-semibold sm:text-sm">
                      Placeholder Track {index + 1}
                    </h3>
                    <p className="text-xs sm:text-sm">Placeholder Artist</p>
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
