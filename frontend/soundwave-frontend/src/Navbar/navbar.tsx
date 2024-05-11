import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HamburgerMenu from "./hamburgermenu";
import Search from "./search";
import GenreDropdownMenu from "./dropdowns/genreDropdown";
import PlaylistDropdownMenu from "./dropdowns/playlistDropdown";
import ProfileDropdown from "./dropdowns/profileDropdown";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showGenreDropdown, setShowGenreDropdown] = useState<boolean>(false);
  const [showPlaylistDropdown, setShowPlaylistDropdown] =
    useState<boolean>(false);
  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);

  const toggleGenreDropdown = () => {
    setShowGenreDropdown((prevState) => !prevState);
    setShowPlaylistDropdown(false);
    setShowProfileDropdown(false);
  };

  const togglePlaylistDropdown = () => {
    setShowPlaylistDropdown((prevState) => !prevState);
    setShowGenreDropdown(false);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prevState) => !prevState);
    setShowGenreDropdown(false);
    setShowPlaylistDropdown(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleSearch = (value: string) => {
    // Implement your search logic here
    console.log("Search query:", value);
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Large devices */}
        <div className="hidden md:flex md:justify-between md:items-center w-full">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Music App</span>
          </a>
          <div className=" text-gray-600 flex">
            <Search onSearch={handleSearch} />
            <GenreDropdownMenu
              showGenreDropdown={showGenreDropdown}
              toggleGenreDropdown={toggleGenreDropdown}
            />
            <PlaylistDropdownMenu
              showPlaylistDropdown={showPlaylistDropdown}
              togglePlaylistDropdown={togglePlaylistDropdown}
            />
            <ProfileDropdown
              showProfileDropdown={showProfileDropdown}
              toggleProfileDropdown={toggleProfileDropdown}
            />
          </div>
        </div>
        {/* Small devices */}
        <div className="md:flex md:justify-between md:items-center w-full">
          <div className="md:hidden flex justify-between items-center w-full">
            <a
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <span className="ml-3 text-xl">Music App</span>
            </a>
            <div>
              {showMenu ? (
                <FaTimes
                  onClick={toggleMenu}
                  className="cursor-pointer text-gray-500"
                />
              ) : (
                <FaBars
                  onClick={toggleMenu}
                  className="cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>
          {showMenu && (
            <HamburgerMenu
              toggleGenreDropdown={toggleGenreDropdown}
              togglePlaylistDropdown={togglePlaylistDropdown}
              toggleProfileDropdown={toggleProfileDropdown}
              showGenreDropdown={showGenreDropdown}
              showPlaylistDropdown={showPlaylistDropdown}
              showProfileDropdown={showProfileDropdown}
              toggleMenu={toggleMenu}
            />
          )}
        </div>
        <div className="  md:flex md:justify-center md:items-center md:w-auto w-full mt-4">
          <div className="md:hidden">
            <Search onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
