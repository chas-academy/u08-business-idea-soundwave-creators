import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { searchAlbums, searchArtists, searchTitles } from "../../../api/SearchApi";
interface SearchProps {
  onSearchQueryChange: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchQueryChange }) => {
  const [searchValue, setSearchValue] = useState<string>("");
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
      const albumResults = await searchAlbums(searchValue); // Search by album
      const artistResults = await searchArtists(searchValue); // Search by artist
      const titleResults = await searchTitles(searchValue); // Search by title
  
      if (albumResults.length > 0) {
        navigate(`/album/${encodeURIComponent(searchValue)}`, {
          state: { albumResults },
        });
      } else if (artistResults.length > 0) {
        navigate(`/artist/${encodeURIComponent(searchValue)}`, {
          state: { artistResults },
        });
      } else if (titleResults.length > 0) {
        navigate(`/search/${encodeURIComponent(searchValue)}`, {
          state: { titleResults },
        });
      }
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
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary"
      >
        <FaSearch className="text-secondary" />
      </button>
    </form>
  );
};

export default Search;
