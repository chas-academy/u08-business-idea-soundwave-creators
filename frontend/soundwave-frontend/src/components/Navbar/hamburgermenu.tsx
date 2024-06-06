import { useRef, useState , useEffect} from "react";
import { FaAngleDown } from "react-icons/fa";
import useClickOutside from "../../hooks/useClickOutside";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';
function HamburgerMenu() {
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navigate = useNavigate();

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

  const [angleStates, setAngleStates] = useState({
    genreDropdown: false,
    playlistDropdown: false,
    profileDropdown: false,
  });

  const handleDropdownToggle = (dropdownType: string) => {
    console.log("Dropdown type:", dropdownType);
    const newAngleStates = {
      genreDropdown: false,
      playlistDropdown: false,
      profileDropdown: false,
    };
    switch (dropdownType) {
      case "genre":
        toggleGenreDropdown();
        newAngleStates.genreDropdown = !angleStates.genreDropdown;
        console.log(
          "Genre dropdown is now",
          newAngleStates.genreDropdown ? "open" : "closed"
        );
        break;
      case "playlist":
        togglePlaylistDropdown();
        newAngleStates.playlistDropdown = !angleStates.playlistDropdown;
        console.log(
          "Playlist dropdown is now",
          newAngleStates.playlistDropdown ? "open" : "closed"
        );
        break;
      case "profile":
        toggleProfileDropdown();
        newAngleStates.profileDropdown = !angleStates.profileDropdown;
        console.log(
          "Profile dropdown is now",
          newAngleStates.profileDropdown ? "open" : "closed"
        );
        break;
      default:
        break;
    }
    console.log("New angle states:", newAngleStates);
    setAngleStates(newAngleStates);
  };

  const ref = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');

  useClickOutside(ref, () => {
    if (showGenreDropdown) {
      toggleGenreDropdown();
    }
  });
  useClickOutside(ref, () => {
    if (showPlaylistDropdown) {
      togglePlaylistDropdown();
    }
  });
  useClickOutside(ref, () => {
    if (showProfileDropdown) {
      toggleProfileDropdown();
    }
  });

  const handleGenreClick = (genre: string) => {
    navigate(`/genres/${genre}`);
    toggleGenreDropdown();
  };

//Samira added this part
useEffect(() => {
  const fetchUserRole = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      setIsLoggedIn(true);

      const response = await API.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRole(response.data.role);

    } catch (error) {
      console.error('Failed to fetch user role:', error);
    }
  };

  fetchUserRole();
}, []);

const handleDashboardClick = () => {
  if (role === 'admin') {
    // Redirect to admin dashboard
    navigate('/admindashboard');
  } else {
    console.log('You are not authorized'); // Print message
    // Redirect to login page
    navigate('/login');
  }
};

const handleLogout = () => {
  // Clear the user's session/token from local storage
  localStorage.removeItem('token');
  // Redirect the user to the login page or another appropriate page
  navigate('/login');
};

  return (
    <div className="absolute top-16 left-0 w-full h-auto bg-primary z-50 pb-4  ">
      <div ref={ref}>
        <button
          type="button"
          onClick={() => handleDropdownToggle("genre")}
          className=" px-4 py-2 w-full text-left hover:text-text hover:bg-hover text-secondary focus:outline-none flex flex-row bg-transparent shadow-secondary"
        >
          Genre
          <FaAngleDown
            className={`ml-3 mt-1 text-12 ${
              angleStates.genreDropdown ? "rotate-180" : ""
            }`}
          />{" "}
        </button>
        {showGenreDropdown && (
          <div>
            <button
              onClick={() => handleGenreClick("Pop")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Pop
            </button>
            <button
              onClick={() => handleGenreClick("Rock")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover  focus:outline-none"
            >
              Rock
            </button>
            <button
              onClick={() => handleGenreClick("Hip Hop")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Hip Hop
            </button>
            <button
              onClick={() => handleGenreClick("R&B")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              R&B
            </button>
            <button
              onClick={() => handleGenreClick("Electronic")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Electronic
            </button>
            <button
              onClick={() => handleGenreClick("Jazz")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Jazz
            </button>
            <button
              onClick={() => handleGenreClick("Classical")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Classical
            </button>
            <button
              onClick={() => handleGenreClick("Country")}
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Country
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => handleDropdownToggle("playlist")}
          className=" px-4 py-2 w-full text-left hover:text-text hover:bg-hover bg-transparent shadow-secondary  text-secondary focus:outline-none flex flex-row"
        >
          Playlist
          <FaAngleDown
            className={`ml-3 mt-1 text-12 ${
              angleStates.playlistDropdown ? "rotate-180" : ""
            }`}
          />
        </button>
        {showPlaylistDropdown && (
          <div>
            <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
              Playlist 1
            </button>
            <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
              Playlist 2
            </button>
            <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
              Playlist 3
            </button>
            <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
              Playlist 4
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => handleDropdownToggle("profile")}
          className="px-4 py-2 w-full text-left hover:text-text hover:bg-hover  bg-transparent shadow-secondary  text-secondary focus:outline-none flex flex-row"
        >
          Profile
          <FaAngleDown
            className={`ml-3 mt-1 text-12 ${
              angleStates.profileDropdown ? "rotate-180" : ""
            }`}
          />
        </button>
        {showProfileDropdown && (
          <div>
             {!isLoggedIn && (
                <>
            <Link
              to="/login"
              className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Login
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Home
            </Link>
            </>
              )}
               {isLoggedIn && (
      <>
            {/* <Link
              to="/subscribe"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Subscribe
            </Link> */}
            {/* <Link
              to="/aboutus"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              About Us
            </Link> */}
            {/* <Link
              to="/contactus"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none"
            >
              Contact Us
            </Link> */}
            <Link
              to="/"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/userdashboard"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none"
            >
              Profile
            </Link>
            {role === 'admin' && (
            <Link
              to="/admindashboard"  onClick={handleDashboardClick}
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none"
            >
              Admin Dashboard
            </Link>
             )}
            {/* <Link
              to="/userdashboard"
              className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none"
            >
              User Dashboard
            </Link> */}
            <button onClick={handleLogout} className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover focus:outline-none">
              Log Out
            </button>
            </>
    )}
      
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
