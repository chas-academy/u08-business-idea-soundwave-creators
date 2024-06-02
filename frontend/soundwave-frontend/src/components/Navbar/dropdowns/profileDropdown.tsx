import React, { useRef, useEffect, useState } from 'react';
import { FaUser} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useClickOutside from '../../../hooks/useClickOutside';
import API from '../../../api/api';

interface ProfileDropdownMenuProps {
    showProfileDropdown: boolean;
    toggleProfileDropdown: () => void;
  }

  const ProfileDropdown: React.FC<ProfileDropdownMenuProps> = ({ showProfileDropdown, toggleProfileDropdown }) => {
      const [role, setRole] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

      useClickOutside(ref, () => {
        if (showProfileDropdown) {
          toggleProfileDropdown();
        }
      });

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
    
      //const handleProfileClick = () => {
        // Redirect to user profile page
       // navigate('/userprofile');};
    
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
        <div ref={ref}>
          <button
            type="button"
            onClick={toggleProfileDropdown}
            className="ml-3 h-10 w-10 rounded-full text-sm focus:outline-none flex items-center justify-center bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover transition-transform duration-300 hover:scale-110"
          >
            <FaUser />
          </button>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-5 w-44 bg-primary shadow-secondary text-secondary hover:text-text rounded-lg overflow-hidden shadow-md profile-dropdown z-10">
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
                    Log In
                  </Link>
                  <Link to="/" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
                    Home
                  </Link>
    
                  {/* Add other links for not logged in users */}
                </>
              )}
     {isLoggedIn && (
      <>
        <Link to="/" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Home</Link>
    
        <Link to="/userdashboard" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
          Profile
        </Link>
        {role === 'admin' && (
          <Link to="/admindashboard" onClick={handleDashboardClick} className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
            Admin Dashboard
          </Link>
        )}
        <button onClick={handleLogout} className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">
          Log Out
        </button>
      </>
    )}
            </div>
          )}
        </div>
      );
    };
    
    export default ProfileDropdown;