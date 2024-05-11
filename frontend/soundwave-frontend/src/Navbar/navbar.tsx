//  import { useState, useRef } from 'react';
// import { FaUser, FaSearch, FaAngleDown } from 'react-icons/fa';

// function Navbar() {
//   const [showGenreDropdown, setShowGenreDropdown] = useState<boolean>(false);
//   const [showPlaylistDropdown, setShowPlaylistDropdown] = useState<boolean>(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

//   const genreDropdownRef = useRef<HTMLDivElement>(null);
//   const playlistDropdownRef = useRef<HTMLDivElement>(null);
//   const profileDropdownRef = useRef<HTMLDivElement>(null);

//   const toggleGenreDropdown = () => {
//     setShowGenreDropdown((prevState) => !prevState);
//     setShowPlaylistDropdown(false);
//     setShowProfileDropdown(false);
//   };

//   const togglePlaylistDropdown = () => {
//     setShowPlaylistDropdown((prevState) => !prevState);
//     setShowGenreDropdown(false);
//     setShowProfileDropdown(false);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown((prevState) => !prevState);
//     setShowGenreDropdown(false);
//     setShowPlaylistDropdown(false);
//   };

//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
//         <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <span className="ml-3 text-xl">Music App</span>
//         </a>
//         <div className=" text-gray-600 flex">
//           <div className="relative">
//             <input type="search" placeholder="Search" className="bg-gray-200 h-10 pr-10 ml-5 pl-4 rounded-full text-sm focus:outline-none" />
//             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><FaSearch /></div>
//           </div>
//           <button type="button" onClick={toggleGenreDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
//             Genre <FaAngleDown className="ml-3" />
//           </button>
//           {showGenreDropdown && (
//             <div ref={genreDropdownRef} className="absolute right-20 mr-32 mt-11 w-44 bg-gray-200 border rounded-lg overflow-hidden shadow-md genre-dropdown">
//               <button className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Pop</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Rock</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Hip Hop</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">R&B</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Electronic</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-700 hover:bg-gray-400 text-white focus:outline-none">Jazz</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-800 hover:bg-gray-400 text-white focus:outline-none">Classical</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-900 hover:bg-gray-400 text-white focus:outline-none">Country</button>
//             </div>
//           )}
//           <button type="button" onClick={togglePlaylistDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
//             Playlist <FaAngleDown className="ml-3" />
//           </button>
//           {showPlaylistDropdown && (
//             <div ref={playlistDropdownRef} className="absolute right-20 mr-8 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md playlist-dropdown">
//               <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 1</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 2</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Playlist 3</button>
//               <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Playlist 4</button>
//             </div>
//           )}
//           <button type="button" onClick={toggleProfileDropdown} className="ml-3 bg-gray-200 h-10 w-10 rounded-full text-sm focus:outline-none flex items-center justify-center">
//             <FaUser />
//           </button>
//           {showProfileDropdown && (
//             <div ref={profileDropdownRef} className="absolute right-0 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md profile-dropdown">
//               <button className="block px-4 py-2 w-full text-left  bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Login</button>
//               <button className="block px-4 py-2 w-full text-left  bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Subscribe</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



// import React, { useState, useRef} from 'react';
// import { FaUser, FaSearch, FaAngleDown, FaBars } from 'react-icons/fa';
// import HamburgerMenu from './hamburgermenu';

// function Navbar() {
//   const [showMenu, setShowMenu] = useState<boolean>(false);
//   const [showGenreDropdown, setShowGenreDropdown] = useState<boolean>(false);
//   const [showPlaylistDropdown, setShowPlaylistDropdown] = useState<boolean>(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

//   const genreDropdownRef = useRef<HTMLDivElement>(null);
//   const playlistDropdownRef = useRef<HTMLDivElement>(null);
//   const profileDropdownRef = useRef<HTMLDivElement>(null);

//   const toggleGenreDropdown = () => {
//     setShowGenreDropdown((prevState) => !prevState);
//     setShowPlaylistDropdown(false);
//     setShowProfileDropdown(false);
//   };

//   const togglePlaylistDropdown = () => {
//     setShowPlaylistDropdown((prevState) => !prevState);
//     setShowGenreDropdown(false);
//     setShowProfileDropdown(false);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown((prevState) => !prevState);
//     setShowGenreDropdown(false);
//     setShowPlaylistDropdown(false);
//   };

//   const toggleMenu = () => {
//     setShowMenu((prevState) => !prevState);
//   };
//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
//       <div className="md:flex md:justify-between md:items-center w-full">
//           <div className="md:hidden flex justify-between items-center w-full">
//             <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//               <span className="ml-3 text-xl">Music App</span>
//             </a>
//             <div>
//               <FaBars onClick={toggleMenu} />
//             </div>
//           </div>
//           {showMenu && (
//             <HamburgerMenu
//               toggleGenreDropdown={toggleGenreDropdown}
//               togglePlaylistDropdown={togglePlaylistDropdown}
//               toggleProfileDropdown={toggleProfileDropdown}
//               showGenreDropdown={showGenreDropdown}
//               showPlaylistDropdown={showPlaylistDropdown}
//               showProfileDropdown={showProfileDropdown}
//             />
//           )}
//         </div>
//           <div className="md:flex md:justify-center md:items-center md:w-auto w-full mt-4">
//           <div className="relative w-full">
//             <input
//               type="search"
//               placeholder="Search"
//               className="bg-gray-200 h-10 pr-10 pl-4 rounded-full text-sm w-full focus:outline-none"
//             />
//             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//               <FaSearch />
//             </div>
//           </div>
//         </div>
          
//           {/* Normal menu for large screens */}
//           <div className="hidden md:flex">
//           <button type="button" onClick={toggleGenreDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
//              Genre <FaAngleDown className="ml-3" />
//            </button>
//            {showGenreDropdown && (
//              <div ref={genreDropdownRef} className="absolute right-20 mr-32 mt-11 w-44 bg-gray-200 border rounded-lg overflow-hidden shadow-md genre-dropdown">
//                <button className="block px-4 py-2 w-full text-left bg-gray-100 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Pop</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Rock</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Hip Hop</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">R&B</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Electronic</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-700 hover:bg-gray-400 text-white focus:outline-none">Jazz</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-800 hover:bg-gray-400 text-white focus:outline-none">Classical</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-900 hover:bg-gray-400 text-white focus:outline-none">Country</button>
//              </div>
//              )}
//           </div>
//           <div className="hidden md:flex">
//              <button type="button" onClick={togglePlaylistDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
//              Playlist <FaAngleDown className="ml-3" />
//            </button>
//            {showPlaylistDropdown && (
//              <div ref={playlistDropdownRef} className="absolute right-20 mr-8 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md playlist-dropdown">
//                <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 1</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 2</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Playlist 3</button>
//                <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Playlist 4</button>
//              </div>
//              )}
//           </div>
//           <div className="hidden md:flex">
//           <button type="button" onClick={toggleProfileDropdown} className="ml-3 bg-gray-200 h-10 w-10 rounded-full text-sm focus:outline-none flex items-center justify-center">
//              <FaUser />
//            </button>
//            {showProfileDropdown && (
//              <div ref={profileDropdownRef} className="absolute right-0 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md profile-dropdown">
//                <button className="block px-4 py-2 w-full text-left  bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Login</button>
//                <button className="block px-4 py-2 w-full text-left  bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Subscribe</button>
//              </div>
//              )}
//           </div>
//         </div>
//     </header>
//   );
// }

// export default Navbar;

import { useState, useRef } from 'react';
import { FaUser, FaSearch, FaAngleDown, FaBars } from 'react-icons/fa';
import HamburgerMenu from './hamburgermenu';

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showGenreDropdown, setShowGenreDropdown] = useState<boolean>(false);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState<boolean>(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

  const genreDropdownRef = useRef<HTMLDivElement>(null);
  const playlistDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Large devices */}
        <div className="hidden md:flex md:justify-between md:items-center w-full">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Music App</span>
          </a>
          <div className=" text-gray-600 flex">
            <div className="relative">
              <input type="search" placeholder="Search" className="bg-gray-200 h-10 pr-10 ml-5 pl-4 rounded-full text-sm focus:outline-none" />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><FaSearch /></div>
            </div>
            <button type="button" onClick={toggleGenreDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
              Genre <FaAngleDown className="ml-3" />
            </button>
            {showGenreDropdown && (
              <div ref={genreDropdownRef} className="absolute right-20 mr-32 mt-11 w-44 bg-gray-200 border rounded-lg overflow-hidden shadow-md genre-dropdown">
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
            <button type="button" onClick={togglePlaylistDropdown} className="ml-3 bg-gray-200 text-gray-500 h-10 px-4 rounded-full text-sm focus:outline-none flex items-center">
              Playlist <FaAngleDown className="ml-3" />
            </button>
            {showPlaylistDropdown && (
              <div ref={playlistDropdownRef} className="absolute right-20 mr-8 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md playlist-dropdown">
                  <button className="block px-4 py-2 w-full text-left bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 1</button>
                <button className="block px-4 py-2 w-full text-left bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Playlist 2</button>
                <button className="block px-4 py-2 w-full text-left bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Playlist 3</button>
                <button className="block px-4 py-2 w-full text-left bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Playlist 4</button>
               </div>
            )}
            <button type="button" onClick={toggleProfileDropdown} className="ml-3 bg-gray-200 h-10 w-10 rounded-full text-sm focus:outline-none flex items-center justify-center">
              <FaUser />
            </button>
            {showProfileDropdown && (
              <div ref={profileDropdownRef} className="absolute right-0 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md profile-dropdown">
               <button className="block px-4 py-2 w-full text-left  bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Login</button>
                <button className="block px-4 py-2 w-full text-left  bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">Subscribe</button>
             </div>
            )}
          </div>
        </div>
        {/* Small devices */}
        <div className="md:flex md:justify-between md:items-center w-full">
           <div className="md:hidden flex justify-between items-center w-full">
             <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
               <span className="ml-3 text-xl">Music App</span>
             </a>
             <div>
               <FaBars onClick={toggleMenu} />
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
             />
           )}
         </div>
           <div className="  md:flex md:justify-center md:items-center md:w-auto w-full mt-4">
            <div className='md:hidden'>
           <div className="relative w-full">
             <input
               type="search"
               placeholder="Search"
               className="bg-gray-200 h-10 pr-10 pl-4 rounded-full text-sm w-full focus:outline-none"
             />
             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
               <FaSearch />
             </div>
             </div>
           </div>
         </div>
      </div>
    </header>
  );
}

export default Navbar;
