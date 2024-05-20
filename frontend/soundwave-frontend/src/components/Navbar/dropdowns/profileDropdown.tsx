import React, { useRef } from 'react'
import { FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useClickOutside from '../../../hooks/useClickOutside';

interface ProfileDropdownMenuProps {
    showProfileDropdown: boolean;
    toggleProfileDropdown: () => void;
  }

    const ProfileDropdown: React.FC<ProfileDropdownMenuProps> = ({ showProfileDropdown, toggleProfileDropdown }) => {
      const ref = useRef<HTMLDivElement>(null);

      useClickOutside(ref, () => {
        if (showProfileDropdown) {
          toggleProfileDropdown();
        }
      });
  return (
    <div  ref={ref}>
   <button type="button" onClick={toggleProfileDropdown} className="ml-3 h-10 w-10  rounded-full text-sm focus:outline-none flex items-center justify-center bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover transition-transform duration-300 hover:scale-110   ">
              <FaUser />
            </button>
            {showProfileDropdown && (
              <div 
               className="absolute right-0 mt-5 w-44 bg-primary shadow-secondary  text-secondary hover:text-text  rounded-lg overflow-hidden shadow-md profile-dropdown z-10 " >
               <Link to="/login" className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Log In</Link>
               <Link to="/" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Home</Link>
                <Link to="/subscribe" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Subscribe</Link>
                <Link to="/aboutus" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">About Us</Link>
                <Link to="/contactus" className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Contact Us</Link>
                <Link to="/admindashboard" className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Admin Dashboard</Link>
                <Link to="/userdashboard" className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">User Dashboard</Link>
                <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Log Out</button>
             </div>
            )}
  </div>
  )
}

export default ProfileDropdown
