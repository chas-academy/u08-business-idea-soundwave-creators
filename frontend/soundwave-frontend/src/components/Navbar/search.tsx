import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
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
  <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary ">
    <FaSearch className='text-secondary ' />
  </button>
</form>
  );
};

export default Search;
