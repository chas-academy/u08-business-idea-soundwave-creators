import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BsSkipBackwardCircleFill,
  BsFillSkipForwardCircleFill,
  BsShuffle,
  BsPlayFill,
  BsPauseFill,
} from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { addLikedSong } from "../../api/songApi"; // Make sure the path is correct

const shuffleArray = (array: unknown[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MusicPlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song } = location.state || {};
  const [currentSong, setCurrentSong] = useState(song);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffledSongs, setShuffledSongs] = useState(song ? [song] : []);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (song) {
      setCurrentSong(song);
      setShuffledSongs([song]);
    }
  }, [song]);

  const handleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
    if (!isShuffleOn) {
      setShuffledSongs(shuffleArray(shuffledSongs));
    } else {
      setShuffledSongs([currentSong]);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    const newTimeNumber = parseFloat(newTime); // Convert to number
    audioRef.current && (audioRef.current.currentTime = newTimeNumber);
    setCurrentTime(newTimeNumber); // Use the number value
  };

  const skipBackward = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setCurrentSong(shuffledSongs[currentSongIndex - 1]);
    } else {
      setCurrentSongIndex(shuffledSongs.length - 1);
      setCurrentSong(shuffledSongs[shuffledSongs.length - 1]);
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const skipForward = () => {
    if (currentSongIndex < shuffledSongs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setCurrentSong(shuffledSongs[currentSongIndex + 1]);
    } else {
      setCurrentSongIndex(0);
      setCurrentSong(shuffledSongs[0]);
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [isPlaying, currentSong.src]);

  const handleLike = async () => {
    try {
      const userId = localStorage.getItem("userId"); // Ensure userId is stored in localStorage
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        setNotificationMessage("User not logged in");
        setShowNotification(true);
        return;
      }

      await addLikedSong(currentSong._id, userId);
      setLiked(true);
      setNotificationMessage("Song added to liked songs");
    } catch (error) {
      console.error("Error adding liked song:", error);
      setNotificationMessage("Failed to add song to liked songs");
    }
    setShowNotification(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary p-4 md:p-8 lg:p-12">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-8 md:left-8 text-white text-lg cursor-pointer transition ease-out hover:scale-125"
      >
        <IoArrowBackSharp size={35} />
      </button>

      <div className="text-center mb-4 md:mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {song.title}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white">
          {song.artist}
        </p>
      </div>

      <div className="bg-secondary p-6 md:p-10 lg:p-12 rounded-3xl shadow-lg shadow-secondary flex flex-col items-center relative w-full max-w-md md:max-w-lg lg:max-w-xl">
        <button
          onClick={handleLike}
          className="absolute top-4 right-4 text-white cursor-pointer transition ease-out hover:scale-125"
        >
          {liked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
        </button>

        <div className="rounded-full overflow-hidden border-4 border-gray-900 mb-4 md:mb-6 lg:mb-8">
          <img
            src={song.albumImageUrl}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
            alt="Song Cover"
          />
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          preload="auto"
          className="mb-4 md:mb-6 lg:mb-8"
        >
          <source src={currentSong.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="w-full flex items-center mb-4 md:mb-6 lg:mb-8">
          <span className="text-white">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration.toString()}
            step="1"
            value={currentTime.toString()}
            onChange={handleSeek}
            className="mx-4 w-full"
          />
          <span className="text-white">{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
          <button onClick={skipBackward}>
            <BsSkipBackwardCircleFill size={30} className="text-white" />
          </button>
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <BsPauseFill size={40} className="text-white" />
            ) : (
              <BsPlayFill size={40} className="text-white" />
            )}
          </button>
          <button onClick={skipForward}>
            <BsFillSkipForwardCircleFill size={30} className="text-white" />
          </button>
          <button onClick={handleShuffle}>
            <BsShuffle size={25} className="text-white" />
          </button>
        </div>
      </div>

      {showNotification && (
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-md shadow-lg">
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
