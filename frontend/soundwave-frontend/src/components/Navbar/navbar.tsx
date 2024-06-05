import { useState,  useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HamburgerMenu from "./hamburgermenu";
import Search from "./search/search";
import GenreDropdownMenu from "./dropdowns/genreDropdown";
import PlaylistDropdownMenu from "./dropdowns/playlistDropdown";
import ProfileDropdown from "./dropdowns/profileDropdown";
import useClickOutside from "../../hooks/useClickOutside";


interface NavbarProps {
  onSearchQueryChange: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchQueryChange }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showGenreDropdown, setShowGenreDropdown] = useState<boolean>(false);
  const [showPlaylistDropdown, setShowPlaylistDropdown] =
    useState<boolean>(false);
  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);

    
  const genreRef = useRef<HTMLDivElement>(null);
  const playlistRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(genreRef, () => setShowGenreDropdown(false));
  useClickOutside(playlistRef, () => setShowPlaylistDropdown(false));
  useClickOutside(profileRef, () => setShowProfileDropdown(false));
  useClickOutside(menuRef, () => {
    setShowMenu(false); // Close the entire hamburger menu when clicking outside
  });


  
  const toggleGenreDropdown = () => {
    setShowGenreDropdown(!showGenreDropdown);
    setShowPlaylistDropdown(false);
    setShowProfileDropdown(false);
  };

  const togglePlaylistDropdown = () => {
    setShowPlaylistDropdown(!showPlaylistDropdown);
    setShowGenreDropdown(false);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowGenreDropdown(false);
    setShowPlaylistDropdown(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    handleCloseDropdowns();
  };

  const handleCloseDropdowns = () => {
    setShowGenreDropdown(false);
    setShowPlaylistDropdown(false);
    setShowProfileDropdown(false);
  };


  // const handleSearchQueryChange = (query: string) => {
  //   console.log("Search query received in Navbar:", query); // Add this console log
  //   onSearchQueryChange(query);
  // };
  console.log("Navbar rendered"); // Add this console log

  return (
    <header className="text-gray-600 body-font bg-primary">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Large devices */}
        <div className="hidden md:flex md:justify-between md:items-center w-full">
          <a
            href="/"
            className="flex title-font font-medium items-center text-secondary mb-4 md:mb-0 transition-transform duration-300 hover:scale-125"
          >
            <span className="ml-3 text-xl">Sound Wave</span>
          </a>
          <div className="  flex">
            <Search  onSearchQueryChange={onSearchQueryChange}/>
            <div ref={genreRef}> 
            <GenreDropdownMenu
              showGenreDropdown={showGenreDropdown}
              toggleGenreDropdown={toggleGenreDropdown}
            />
            </div>
            <div ref={playlistRef}> 
            <PlaylistDropdownMenu
              showPlaylistDropdown={showPlaylistDropdown}
              togglePlaylistDropdown={togglePlaylistDropdown}
            />
            </div>
            <div ref={profileRef}> 
            <ProfileDropdown
              showProfileDropdown={showProfileDropdown}
              toggleProfileDropdown={toggleProfileDropdown}
            />
            </div>
          </div>
        </div>
        {/* Small devices */}
        <div className="md:flex md:justify-between md:items-center w-full">
          <div className="md:hidden flex justify-between items-center w-full">
            <a
              href="/"
              className="flex title-font font-medium items-center text-secondary mb-4 md:mb-0"
            >
              <span className="ml-3 text-xl">Sound Wave</span>
            </a>
            <div>
              {showMenu ? (
                <FaTimes
                onClick={() => {
                  toggleMenu();
                  handleCloseDropdowns(); // Close dropdowns when X is clicked
                }}
                  className="cursor-pointer text-secondary text-2xl "
                />
              ) : (
                <FaBars
                  onClick={toggleMenu}
                  className="cursor-pointer text-secondary text-2xl "
                />
              )}
            </div>
          </div>
          {showMenu && (
         <div ref={menuRef}>
         <HamburgerMenu />
       </div>
        )}
        </div>
        <div className="  md:flex md:justify-center md:items-center md:w-auto w-full mt-4">
          <div className="md:hidden">
            <Search  onSearchQueryChange={onSearchQueryChange} />
          </div>
        </div>
      </div>
    
    </header>
  );
}

export default Navbar;
