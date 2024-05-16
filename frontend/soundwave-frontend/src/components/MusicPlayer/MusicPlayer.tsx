// import React, { useState, useEffect, useRef } from "react";
// import {
//   BsSkipBackwardCircleFill,
//   BsFillSkipForwardCircleFill,
//   BsShuffle,
//   BsPlayFill,
//   BsPauseFill,
// } from "react-icons/bs";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { IoArrowBackSharp } from "react-icons/io5";

// // Mock API endpoints
// const mockApi = {
//   addToPlaylist: async (songId) => {
//     // Simulate a network request
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ success: true, message: "Song added to playlist" });
//       }, 1000);
//     });
//   },
//   removeFromPlaylist: async (songId) => {
//     // Simulate a network request
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ success: true, message: "Song removed from playlist" });
//       }, 1000);
//     });
//   },
// };

// const MusicPlayer = () => {
//   const [liked, setLiked] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState("");
//   const [isShuffleOn, setIsShuffleOn] = useState(false); // State for shuffle button
//   const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
//   const [currentTime, setCurrentTime] = useState(0); // Current time of the audio
//   const [duration, setDuration] = useState(0); // Total duration of the audio

//   const audioRef = useRef(null); // Reference to the audio element

//   const songId = "123"; // Example song ID

//   const handleLike = async () => {
//     if (liked) {
//       // Remove song from playlist
//       const response = await mockApi.removeFromPlaylist(songId);
//       setNotificationMessage(response.message);
//     } else {
//       // Add song to playlist
//       const response = await mockApi.addToPlaylist(songId);
//       setNotificationMessage(response.message);
//     }

//     setLiked(!liked);
//     setShowNotification(true);
//   };

//   const handleShuffle = () => {
//     setIsShuffleOn(!isShuffleOn);
//   };

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleSeek = (e) => {
//     const newTime = e.target.value;
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   useEffect(() => {
//     if (showNotification) {
//       const timer = setTimeout(() => {
//         setShowNotification(false);
//       }, 3000); // Notification will disappear after 3 seconds

//       return () => clearTimeout(timer); // Clear timeout if component unmounts
//     }
//   }, [showNotification]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-primary">
//       {/* Go Back Button */}
//       <button className="absolute top-12 left-16 text-white text-lg cursor-pointer transition ease-out hover:scale-125">
//         <IoArrowBackSharp size={35} />
//       </button>

//       {/* Song Title and Artist Name */}
//       <div className="text-center mb-8">
//         <h1 className="text-2xl font-bold text-white">Song Title</h1>
//         <p className="text-lg text-white">Artist</p>
//       </div>

//       {/* Music Player Box */}
//       <div className="bg-secondary p-10 rounded-3xl shadow-lg shadow-secondary flex flex-col items-center relative w-1/3">
//         {/* Heart Symbol */}
//         <button
//           onClick={handleLike}
//           className="absolute top-4 right-4 text-white cursor-pointer transition ease-out hover:scale-125"
//         >
//           {liked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
//         </button>

//         {/* Song Photo Circle */}
//         <div className="rounded-full overflow-hidden border-3 border-gray-900 mb-6">
//           <img
//             src="https://i.pinimg.com/736x/a8/14/eb/a814eb4c51518adcf827f4ee64137f7c.jpg"
//             className="w-48 h-48 object-cover transition ease-out hover:scale-110"
//             alt="Song Cover"
//           />
//         </div>

//         {/* Audio Element */}
//         <audio
//           ref={audioRef}
//           onTimeUpdate={handleTimeUpdate}
//           onLoadedMetadata={handleLoadedMetadata}
//           className="mb-6"
//         >
//           <source src="song.mp3" type="audio/mpeg" />
//           Your browser does not support the audio element.
//         </audio>

//         {/* Audio Progress Bar */}
//         <input
//           type="range"
//           value={currentTime}
//           max={duration}
//           onChange={handleSeek}
//           className="w-full cursor-pointer"
//         />

//         {/* Skip, Go Back, Shuffle Buttons */}
//         <div className="flex ml-8  mt-6 justify-center">
//           <button className="text-white mr-4 cursor-pointer transition ease-out hover:scale-125">
//             <BsSkipBackwardCircleFill size={25} />
//           </button>
//           {/* Play/Pause Button */}
//           <button
//             className="text-white mr-4 cursor-pointer transition ease-out hover:scale-125"
//             onClick={togglePlayPause}
//           >
//             {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
//           </button>
//           <button className="text-white mr-4 cursor-pointer transition ease-out hover:scale-125">
//             <BsFillSkipForwardCircleFill size={25} />
//           </button>
//           <button
//             className={`text-white cursor-pointer transition ease-out hover:scale-125 ${
//               isShuffleOn ? "text-primary" : ""
//             }`}
//             onClick={handleShuffle}
//           >
//             <BsShuffle size={25} />
//           </button>
//         </div>
//       </div>

//       {/* Notification */}
//       {showNotification && (
//         <div className="absolute top-6 right-10 text-white bg-secondary shadow-lg shadow-secondary p-4 rounded-lg transition-all duration ease-in-out">
//           {notificationMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MusicPlayer;

import React, { useState, useEffect, useRef } from "react";
import {
  BsSkipBackwardCircleFill,
  BsFillSkipForwardCircleFill,
  BsShuffle,
  BsPlayFill,
  BsPauseFill,
} from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";

// Mock API endpoints
const mockApi = {
  addToPlaylist: async (songId) => {
    // Simulate a network request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Song added to playlist" });
      }, 1000);
    });
  },
  removeFromPlaylist: async (songId) => {
    // Simulate a network request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Song removed from playlist" });
      }, 1000);
    });
  },
};

const MusicPlayer = () => {
  const [liked, setLiked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isShuffleOn, setIsShuffleOn] = useState(false); // State for shuffle button
  const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
  const [currentTime, setCurrentTime] = useState(0); // Current time of the audio
  const [duration, setDuration] = useState(0); // Total duration of the audio

  const audioRef = useRef(null); // Reference to the audio element

  const songId = "123"; // Example song ID

  const handleLike = async () => {
    if (liked) {
      // Remove song from playlist
      const response = await mockApi.removeFromPlaylist(songId);
      setNotificationMessage(response.message);
    } else {
      // Add song to playlist
      const response = await mockApi.addToPlaylist(songId);
      setNotificationMessage(response.message);
    }

    setLiked(!liked);
    setShowNotification(true);
  };

  const handleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Notification will disappear after 3 seconds

      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, [showNotification]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      {/* Go Back Button */}
      <button className="absolute top-12 left-4 sm:left-16 text-white text-lg cursor-pointer transition ease-out hover:scale-125">
        <IoArrowBackSharp size={35} />
      </button>

      {/* Song Title and Artist Name */}
      <div className="text-center mb-4 sm:mb-8">
        <h1 className="text-lg sm:text-2xl font-bold text-white">Song Title</h1>
        <p className="text-sm sm:text-lg text-white">Artist</p>
      </div>

      {/* Music Player Box */}
      <div className="bg-secondary p-4 sm:p-10 rounded-3xl shadow-lg shadow-secondary flex flex-col items-center relative w-full sm:w-full md:w-2/3 lg:w-2/5">
        {/* Heart Symbol */}
        <button
          onClick={handleLike}
          className="absolute top-4 right-4 text-white cursor-pointer transition ease-out hover:scale-125"
        >
          {liked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
        </button>

        {/* Song Photo Circle */}
        <div className="rounded-full overflow-hidden border-3 border-gray-900 mb-4 sm:mb-6">
          <img
            src="https://i.pinimg.com/736x/a8/14/eb/a814eb4c51518adcf827f4ee64137f7c.jpg"
            className="w-24 h-24 sm:w-48 sm:h-48 object-cover transition ease-out hover:scale-110"
            alt="Song Cover"
          />
        </div>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="mb-6"
        >
          <source src="song.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Audio Progress Bar */}
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={handleSeek}
          className="w-full cursor-pointer"
        />

        {/* Skip, Go Back, Shuffle Buttons */}
        <div className="flex ml-8  mt-6 justify-center">
          <button className="text-white mr-4 cursor-pointer transition ease-out hover:scale-125">
            <BsSkipBackwardCircleFill size={25} />
          </button>
          {/* Play/Pause Button */}
          <button
            className="text-white mr-4 cursor-pointer transition ease-out hover:scale-125"
            onClick={togglePlayPause}
          >
            {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
          </button>
          <button className="text-white mr-4 cursor-pointer transition ease-out hover:scale-125">
            <BsFillSkipForwardCircleFill size={25} />
          </button>
          <button
            className={`text-white cursor-pointer transition ease-out hover:scale-125 ${
              isShuffleOn ? "text-primary" : ""
            }`}
            onClick={handleShuffle}
          >
            <BsShuffle size={25} />
          </button>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="absolute top-6 right-10 text-white bg-secondary shadow-lg shadow-secondary p-4 rounded-lg transition-all duration ease-in-out">
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
