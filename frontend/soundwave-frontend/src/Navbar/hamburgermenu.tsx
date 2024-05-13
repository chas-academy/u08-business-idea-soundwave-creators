import React, { useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  toggleGenreDropdown: () => void;
  togglePlaylistDropdown: () => void;
  toggleProfileDropdown: () => void;
  showGenreDropdown: boolean;
  showPlaylistDropdown: boolean;
  showProfileDropdown: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  toggleGenreDropdown,
  togglePlaylistDropdown,
  toggleProfileDropdown,
  showGenreDropdown,
  showPlaylistDropdown,
  showProfileDropdown,
}) => {
  const [angleStates, setAngleStates] = useState({
    genreDropdown: false,
    playlistDropdown: false,
    profileDropdown: false,
  });

  const genreDropdownRef = useRef<HTMLDivElement>(null);
  const playlistDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdownType: string) => {
    const newAngleStates = {
      genreDropdown: false,
      playlistDropdown: false,
      profileDropdown: false,
    };

    switch (dropdownType) {
      case 'genre':
        toggleGenreDropdown();
        newAngleStates.genreDropdown = !angleStates.genreDropdown;
        break;
      case 'playlist':
        togglePlaylistDropdown();
        newAngleStates.playlistDropdown = !angleStates.playlistDropdown;
        break;
      case 'profile':
        toggleProfileDropdown();
        newAngleStates.profileDropdown = !angleStates.profileDropdown;
        break;
      default:
        break;
    }

    setAngleStates(newAngleStates);
  };

  return (
    <div className="absolute top-16 left-0 w-full h-auto bg-primary z-50 pb-4  ">
     <button type="button" onClick={() => handleDropdownToggle('genre')}className=" px-4 py-2 w-full text-left hover:text-text hover:bg-hover text-secondary focus:outline-none flex flex-row bg-transparent shadow-secondary">
        Genre  <FaAngleDown className={`ml-3 mt-1 text-12 ${angleStates.genreDropdown ? 'rotate-180' : ''}`} />
      </button>
       {showGenreDropdown && (
                <div ref={genreDropdownRef} >
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Pop</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover  focus:outline-none">Rock</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Hip Hop</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">R&B</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Electronic</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Jazz</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Classical</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Country</button>
      
                </div>
              )}
             <button type="button" onClick={() => handleDropdownToggle('playlist')} className=" px-4 py-2 w-full text-left hover:text-text hover:bg-hover bg-transparent shadow-secondary  text-secondary focus:outline-none flex flex-row">
        Playlist<FaAngleDown className={`ml-3 mt-1 text-12 ${angleStates.playlistDropdown ? 'rotate-180' : ''}`} />
      </button>
       {showPlaylistDropdown && (
                <div ref={playlistDropdownRef} >
                 <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Playlist 1</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Playlist 2</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Playlist 3</button>
               <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Playlist 4</button>
            
                </div>
              )}
           <button type="button"  onClick={() => handleDropdownToggle('profile')} className="px-4 py-2 w-full text-left hover:text-text hover:bg-hover  bg-transparent shadow-secondary  text-secondary focus:outline-none flex flex-row">
        Profile<FaAngleDown className={`ml-3 mt-1 text-12 ${angleStates.profileDropdown ? 'rotate-180' : ''}`} />
      </button>
        {showProfileDropdown && (
                <div ref={profileDropdownRef} >
                  <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">Login</button>
                  <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">Home</button>
                  <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">Subscribe</button>
                  <Link to="/aboutus" className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">About Us</Link>
                  <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">Contact Us</button>
                  <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">Log Out</button>
               
                </div>
              )}
              </div>
  );
}

export default HamburgerMenu;
