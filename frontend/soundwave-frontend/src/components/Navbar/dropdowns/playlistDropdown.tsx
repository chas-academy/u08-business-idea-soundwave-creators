import React from "react";
import { FaAngleDown } from "react-icons/fa";

interface PlaylistDropdownMenuProps {
  showPlaylistDropdown: boolean;
  togglePlaylistDropdown: () => void;
}

const PlaylistDropdownMenu: React.FC<PlaylistDropdownMenuProps> = ({
  showPlaylistDropdown,
  togglePlaylistDropdown,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={togglePlaylistDropdown}
        className="ml-3 h-10 px-4 mr-1 rounded-full text-sm focus:outline-none flex items-center bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover transition-transform duration-300 hover:scale-110 "
      >
        Playlist <FaAngleDown className="ml-3" />
      </button>
      {showPlaylistDropdown && (
        <div className="absolute right-20 mr-8 mt-11 w-44  bg-primary shadow-secondary  text-secondary hover:text-text  border rounded-lg overflow-hidden shadow-md playlist-dropdown z-10 ">
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">
            Playlist 1
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">
            Playlist 2
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">
            Playlist 3
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">
            Playlist 4
          </button>
        </div>
      )}
    </>
  );
};

export default PlaylistDropdownMenu;
