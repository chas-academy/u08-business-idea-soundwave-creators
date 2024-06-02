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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Song added to playlist" });
      }, 1000);
    });
  },
  removeFromPlaylist: async (songId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Song removed from playlist" });
      }, 1000);
    });
  },
};

const songs = [
  {
    id: "1",
    title: "Glow",
    artist: "A Himitsu (feat. Nori)",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    cover:
      "https://i.pinimg.com/736x/a8/14/eb/a814eb4c51518adcf827f4ee64137f7c.jpg",
  },
  {
    id: "2",
    title: "The Last Ones",
    artist: "Gunnar Johnsén (feat. JayQ)",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    cover:
      "https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952",
  },
  {
    id: "3",
    title: "Way Up High",
    artist: "Aakash Gandhi (feat. Tom Bailey)",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover:
      "https://www.aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg",
  },
  {
    id: "4",
    title: "Under The Radar",
    artist: "Silent Partner (feat. Paisley Saunders)",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover:
      "https://designwizard.com/blog/album-cover-ideas/resize/4-Design-Wizard-Album-Cover_1650885838707_resize.jpg",
  },
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffledSongs, setShuffledSongs] = useState([...songs]);

  const audioRef = useRef(null);

  const currentSong = shuffledSongs[currentSongIndex];

  const handleLike = async () => {
    if (liked) {
      const response = await mockApi.removeFromPlaylist(currentSong.id);
      setNotificationMessage(response.message);
    } else {
      const response = await mockApi.addToPlaylist(currentSong.id);
      setNotificationMessage(response.message);
    }

    setLiked(!liked);
    setShowNotification(true);
  };

  const handleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
    if (!isShuffleOn) {
      setShuffledSongs(shuffleArray(songs));
    } else {
      setShuffledSongs([...songs]);
    }
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

  const skipBackward = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    } else {
      setCurrentSongIndex(shuffledSongs.length - 1);
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const skipForward = () => {
    if (isShuffleOn) {
      setCurrentSongIndex((prevIndex) => {
        const nextIndex = Math.floor(Math.random() * shuffledSongs.length);
        return nextIndex !== prevIndex
          ? nextIndex
          : (nextIndex + 1) % shuffledSongs.length;
      });
    } else {
      if (currentSongIndex < shuffledSongs.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
      } else {
        setCurrentSongIndex(0);
      }
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
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
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary p-4 md:p-8 lg:p-12">
      <button className="absolute top-4 left-4 md:top-8 md:left-8 text-white text-lg cursor-pointer transition ease-out hover:scale-125">
        <IoArrowBackSharp size={35} />
      </button>

      <div className="text-center mb-4 md:mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {currentSong.title}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white">
          {currentSong.artist}
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
            src={currentSong.cover}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
            alt="Song Cover"
          />
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="mb-4 md:mb-6 lg:mb-8"
        >
          <source src={currentSong.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex items-center w-full mb-2 md:mb-4 lg:mb-6">
          <span className="text-white">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleSeek}
            className="w-full mx-2 cursor-pointer"
          />
          <span className="text-white">{formatTime(duration)}</span>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={skipBackward}
          >
            <BsSkipBackwardCircleFill size={25} />
          </button>
          <button
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={togglePlayPause}
          >
            {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
          </button>
          <button
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={skipForward}
          >
            <BsFillSkipForwardCircleFill size={25} />
          </button>
          <button
            className={`cursor-pointer transition ease-out hover:scale-125 ${
              isShuffleOn ? "text-primary" : "text-white"
            }`}
            onClick={handleShuffle}
          >
            <BsShuffle size={25} />
          </button>
        </div>
      </div>

      {showNotification && (
        <div className="absolute top-10 right-4 md:top-8 md:right-10 text-white bg-secondary shadow-lg shadow-secondary p-4 rounded-lg transition-all duration ease-in-out">
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
