// // 

// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import searchSongs from '../../../services/searchSongs';
// import SongSearchPage from './songSearchPage'; // Update import to reference SongSearchPage

// interface SearchResult {
//   _id: string;
//   title: string;
//   artist: string;
//   album: string;
//   albumImageUrl: string;
//   releaseDate: string;
//   genre: string;
//   duration: string;
//   trackNumber: number;
// }

// const Search: React.FC = () => {
//   const [searchValue, setSearchValue] = useState<string>('');
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const navigate = useNavigate(); // Get the navigate function from React Router

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const results = await searchSongs(searchValue, 'both'); // Search for songs by both title and artist
//       setSearchResults(results);
//       navigate(`/search?query=${searchValue}`); // Redirect to SongSearchPage with the search query
//     } catch (error) {
//       console.error('Error searching songs:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative mr-4">
//       <input
//         type="search"
//         placeholder="Search"
//         value={searchValue}
//         onChange={handleSearchChange}
//         className="bg-transparent h-10 pr-10 pl-4 rounded-full text-sm w-full focus:outline-none shadow-secondary transition-transform duration-300 hover:scale-110"
//       />
//       <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary ">
//         <FaSearch className='text-secondary' />
//       </button>
//       <SongSearchPage searchQuery={searchValue} searchResults={searchResults} /> {/* Render SongSearchPage */}
//     </form>
//   );
// };

// // export default Search;
// import React from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// const Search: React.FC = () => {
//   const [searchValue, setSearchValue] = React.useState<string>('');
//   const navigate = useNavigate(); // Get the navigate function from React Router

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     navigate(`/search?query=${searchValue}`); // Redirect to SongSearchPage with the search query
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative mr-4">
//       <input
//         type="search"
//         placeholder="Search"
//         value={searchValue}
//         onChange={handleSearchChange}
//         className="bg-transparent h-10 pr-10 pl-4 rounded-full text-sm w-full focus:outline-none shadow-secondary transition-transform duration-300 hover:scale-110"
//       />
//       <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary ">
//         <FaSearch className='text-secondary' />
//       </button>
//     </form>
//   );
// };

// export default Search;\
// components/Navbar/Search.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// import { fetchSearchResults } from '../../api/api'; // Import fetchSearchResults from api.ts
import { fetchSearchResults } from '../../../api/api';
interface SearchProps {
  onSearchQueryChange: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchQueryChange }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log("Search value changed:", event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchQueryChange(searchValue);
    console.log("Search value submitted:", searchValue);
    try {
      const searchResults = await fetchSearchResults(searchValue, 'both'); // Use fetchSearchResults from api.ts
      console.log("Search results:", searchResults);
      navigate(`/search/${encodeURIComponent(searchValue)}`, { state: { searchResults } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mr-4">
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
        className="bg-transparent h-10 pr-10 pl-4 rounded-full text-sm w-full focus:outline-none shadow-secondary transition-transform duration-300 hover:scale-110"
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary">
        <FaSearch className='text-secondary' />
      </button>
    </form>
  );
};

export default Search;
