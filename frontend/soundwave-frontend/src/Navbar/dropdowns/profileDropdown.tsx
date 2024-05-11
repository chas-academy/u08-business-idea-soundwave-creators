import React from 'react'
import { FaUser} from 'react-icons/fa';

interface ProfileDropdownMenuProps {
    showProfileDropdown: boolean;
    toggleProfileDropdown: () => void;
  }

    const ProfileDropdown: React.FC<ProfileDropdownMenuProps> = ({ showProfileDropdown, toggleProfileDropdown }) => {
  return (
    <>
   <button type="button" onClick={toggleProfileDropdown} className="ml-3 bg-gray-200 h-10 w-10 rounded-full text-sm focus:outline-none flex items-center justify-center">
              <FaUser />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-11 w-44 bg-white border rounded-lg overflow-hidden shadow-md profile-dropdown">
               <button className="block px-4 py-2 w-full text-left  bg-gray-200 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Log In</button>
               <button className="block px-4 py-2 w-full text-left  bg-gray-300 hover:bg-gray-400 text-slate-400 hover:text-white focus:outline-none">Home</button>
                <button className="block px-4 py-2 w-full text-left  bg-gray-400 hover:bg-gray-400 text-white focus:outline-none">Subscribe</button>
                <button className="block px-4 py-2 w-full text-left  bg-gray-500 hover:bg-gray-400 text-white focus:outline-none">About Us</button>
                <button className="block px-4 py-2 w-full text-left  bg-gray-600 hover:bg-gray-400 text-white focus:outline-none">Contact Us</button>
                <button className="block px-4 py-2 w-full text-left  bg-gray-700 hover:bg-gray-400 text-white focus:outline-none">Log Out</button>
             </div>
            )}
  </>
  )
}

export default ProfileDropdown
