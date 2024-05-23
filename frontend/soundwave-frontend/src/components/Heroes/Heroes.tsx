import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero4.png";

const Heroes: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/subscribe");
  };

  return (
    <div className="w-11/12 mx-auto mt-10 p-10 bg-primary rounded-lg shadow-secondary">
      <p className="text-center text-secondary text-5xl font-extrabold tracking-wide mb-6">Transform Your Listening Experience</p>
      <div className="relative mt-10 h-80 sm:h-96 md:h-112 lg:h-128 rounded-xl overflow-hidden shadow-2xl">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-center justify-center p-6">
          <p className="text-text text-3xl font-extrabold drop-shadow-lg">Discover New Music</p>
          <p className="text-text text-center text-lg mt-2 drop-shadow-lg">Explore curated playlists and personalized recommendations. Start your journey today.</p>
          <button 
            onClick={handleGetStarted} 
            className="mt-4 bg-secondary hover:bg-hover text-text font-bold py-2 px-4 shadow-secondary rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heroes;

