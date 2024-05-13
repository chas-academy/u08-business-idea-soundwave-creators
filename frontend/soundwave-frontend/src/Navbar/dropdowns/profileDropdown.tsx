import React from 'react'
import { FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';


interface ProfileDropdownMenuProps {
    showProfileDropdown: boolean;
    toggleProfileDropdown: () => void;
  }

    const ProfileDropdown: React.FC<ProfileDropdownMenuProps> = ({ showProfileDropdown, toggleProfileDropdown }) => {
  return (
    <>
   <button type="button" onClick={toggleProfileDropdown} className="ml-3 h-10 w-10  rounded-full text-sm focus:outline-none flex items-center justify-center bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover transition-transform duration-300 hover:scale-110   ">
              <FaUser />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-11 w-44 bg-primary shadow-secondary  text-secondary hover:text-text  border rounded-lg overflow-hidden shadow-md profile-dropdown z-10 ">
               <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Log In</button>
               <Link to="/aboutus" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">Home</Link>
                <button className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Subscribe</button>
                <Link to="/aboutus" className="block px-4 py-2 w-full text-left bg-transparent shadow-secondary text-secondary hover:text-text hover:bg-hover focus:outline-none">About Us</Link>
                <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Contact Us</button>
                <button className="block px-4 py-2 w-full text-left  bg-transparent shadow-secondary  text-secondary hover:text-text hover:bg-hover  focus:outline-none">Log Out</button>
             </div>
            )}
  </>
  )
}

export default ProfileDropdown
