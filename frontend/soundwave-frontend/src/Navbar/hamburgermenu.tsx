import React, {  useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

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
  const genreDropdownRef = useRef<HTMLDivElement>(null);
  const playlistDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute right-0 mt-11 bg-white border rounded-lg overflow-hidden shadow-md profile-dropdown">
      <button type="button" onClick={toggleGenreDropdown} className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Genre <FaAngleDown className="ml-3" /></button>
      {showGenreDropdown && (
                <div ref={genreDropdownRef} className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">
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
              <button type="button" onClick={togglePlaylistDropdown} className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist <FaAngleDown className="ml-3" /></button>
              {showPlaylistDropdown && (
                <div ref={playlistDropdownRef} className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">
                 <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 1</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 2</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Playlist 3</button>
               <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Playlist 4</button>
            
                </div>
              )}
              <button type="button" onClick={toggleProfileDropdown} className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Profile <FaAngleDown className="ml-3" /></button>
              {showProfileDropdown && (
                <div ref={profileDropdownRef} className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">
                  <button className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Login</button>
                  <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Subscribe</button>
               
                </div>
              )}
    </div>
  );
}

export default HamburgerMenu;
