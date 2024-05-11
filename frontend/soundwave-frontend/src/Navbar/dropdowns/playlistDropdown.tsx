import React from 'react';
import { FaAngleDown} from 'react-icons/fa';

interface PlaylistDropdownMenuProps {
  showPlaylistDropdown: boolean;
  togglePlaylistDropdown: () => void;
}

const PlaylistDropdownMenu: React.FC<PlaylistDropdownMenuProps> = ({ showPlaylistDropdown, togglePlaylistDropdown }) => {
  return (
    <>
      <button type="button" onClick={togglePlaylistDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
              Playlist <FaAngleDown className="ml-3" />
            </button>
            {showPlaylistDropdown && (
              <div className="absolute right-20 mr-8 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md playlist-dropdown">
                  <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 1</button>
                <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 2</button>
                <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Playlist 3</button>
                <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Playlist 4</button>
               </div>
            )}
    </>
  );
}

export default PlaylistDropdownMenu;
