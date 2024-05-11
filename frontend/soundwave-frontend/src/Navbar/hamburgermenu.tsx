import React, {  useRef, useState} from 'react';
import { FaAngleDown } from 'react-icons/fa';

interface HamburgerMenuProps {
  toggleGenreDropdown: () => void;
  togglePlaylistDropdown: () => void;
  toggleProfileDropdown: () => void;
  showGenreDropdown: boolean;
  showPlaylistDropdown: boolean;
  showProfileDropdown: boolean;
  toggleMenu: () => void;
  }

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  toggleGenreDropdown,
  togglePlaylistDropdown,
  toggleProfileDropdown,
  showGenreDropdown,
  showPlaylistDropdown,
  showProfileDropdown,
}) => {
  const [genreDropdownOpen, setGenreDropdownOpen] = useState<boolean>(false);
  const [playlistDropdownOpen, setPlaylistDropdownOpen] = useState<boolean>(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState<boolean>(false);


  const genreDropdownRef = useRef<HTMLDivElement>(null);
  const playlistDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const handleGenreDropdownToggle = () => {
    toggleGenreDropdown();
    setGenreDropdownOpen((prevState) => !prevState);
  };

  const handlePlaylistDropdownToggle = () => {
    togglePlaylistDropdown();
    setPlaylistDropdownOpen((prevState) => !prevState);
  };

  const handleProfileDropdownToggle = () => {
    toggleProfileDropdown();
    setProfileDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="fixed top-16 left-0 w-full h-full bg-gray-600 z-50">
     <button type="button" onClick={handleGenreDropdownToggle} className=" px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none flex flex-row">
        Genre <FaAngleDown className={`ml-3 mt-1 text-12 ${genreDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
       {showGenreDropdown && (
                <div ref={genreDropdownRef} >
               <button className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Pop</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Rock</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Hip Hop</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">R&B</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Electronic</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-700 hover:bg-gray-400 text-white focus:outline-none">Jazz</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-800 hover:bg-gray-400 text-white focus:outline-none">Classical</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-900 hover:bg-gray-400 text-white focus:outline-none">Country</button>
      
                </div>
              )}
             <button type="button" onClick={handlePlaylistDropdownToggle} className=" px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none flex flex-row">
        Playlist <FaAngleDown className={`ml-3 mt-1 text-12 ${playlistDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
       {showPlaylistDropdown && (
                <div ref={playlistDropdownRef} >
                 <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 1</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 2</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Playlist 3</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Playlist 4</button>
            
                </div>
              )}
           <button type="button" onClick={handleProfileDropdownToggle} className="px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none flex flex-row">
        Profile <FaAngleDown className={`ml-3 mt-1 text-12 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
        {showProfileDropdown && (
                <div ref={profileDropdownRef} >
                  <button className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Login</button>
                  <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Subscribe</button>
               
                </div>
              )}
              </div>
  );
}

export default HamburgerMenu;
