import React from 'react';
import { FaAngleDown} from 'react-icons/fa';

interface GenreDropdownMenuProps {
  showGenreDropdown: boolean;
  toggleGenreDropdown: () => void;
}

const GenreDropdownMenu: React.FC<GenreDropdownMenuProps> = ({ showGenreDropdown, toggleGenreDropdown }) => {
  return (
    <>
     <button type="button" onClick={toggleGenreDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
              Genre <FaAngleDown className="ml-3" />
            </button>
      {showGenreDropdown && (
        <div className="absolute right-20 mr-32 mt-11 w-44 bg-gray-200 border rounded-lg overflow-hidden shadow-md genre-dropdown">
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
    </>
  );
}

export default GenreDropdownMenu;
