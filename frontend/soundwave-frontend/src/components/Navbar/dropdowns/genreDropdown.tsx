import React, { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import useClickOutside from "../../../hooks/useClickOutside";

interface GenreDropdownMenuProps {
  showGenreDropdown: boolean;
  toggleGenreDropdown: () => void;
}

const GenreDropdownMenu: React.FC<GenreDropdownMenuProps> = ({
  showGenreDropdown,
  toggleGenreDropdown,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    if (showGenreDropdown) {
      toggleGenreDropdown();
    }
  });
  return (
    <div ref={ref}>
      <button
        type="button"
        onClick={toggleGenreDropdown}
        className="ml-3 h-10 px-4 mr-1 rounded-full text-sm focus:outline-none flex items-center bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover transition-transform duration-300 hover:scale-110 "
      >
        Genre <FaAngleDown className="ml-3" />
      </button>
      {showGenreDropdown && (
        <div 
         className="absolute  mr-32 mt-5 w-44 rounded-lg overflow-hidden genre-dropdown  bg-primary shadow-secondary  text-secondary hover:text-text  z-10 ">
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Pop
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Rock
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Hip Hop
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            R&B
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Electronic
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Jazz
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Classical
          </button>
          <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">
            Country
          </button>
        </div>
      )}
    </div>
  );
};

export default GenreDropdownMenu;
