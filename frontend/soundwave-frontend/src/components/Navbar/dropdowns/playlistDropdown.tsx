import React, { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import useClickOutside from "../../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";

interface PlaylistDropdownMenuProps {
  showPlaylistDropdown: boolean;
  togglePlaylistDropdown: () => void;
}

const PlaylistDropdownMenu: React.FC<PlaylistDropdownMenuProps> = ({
  showPlaylistDropdown,
  togglePlaylistDropdown,
})=> {
    const ref = useRef<HTMLDivElement>(null);
    const Navigate = useNavigate(); // Hook for navigation

  
    useClickOutside(ref, () => {
      if (showPlaylistDropdown) {
        togglePlaylistDropdown();
      }
    });

    const handleNavigateToDashboard = () => {
      Navigate('/userdashboard'); // Navigate to the UserDashboard
    };

  return (
    <div  ref={ref}>
      <button
        type="button"
        onClick={togglePlaylistDropdown}
        className="ml-3 h-10 px-4 mr-1 rounded-full text-sm focus:outline-none flex items-center bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover transition-transform duration-300 hover:scale-110 "
      >
        Playlist <FaAngleDown className="ml-3" />
      </button>
      {showPlaylistDropdown && (
        <div 
        className="absolute right-20 mr-8 mt-5 w-44  bg-primary shadow-secondary  text-secondary hover:text-text rounded-lg overflow-hidden shadow-md playlist-dropdown z-10 ">
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none"
                      onClick={handleNavigateToDashboard} // Attach navigation function
                      >
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
    </div>
  );
};

export default PlaylistDropdownMenu;
