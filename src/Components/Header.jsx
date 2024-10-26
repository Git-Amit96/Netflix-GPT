import React, { useState } from 'react';
import { LOGO } from '../Utils/common';  // Import the logo image from a utilities file
import { Link } from 'react-router-dom';  // Import Link for navigation between pages

const Header = () => {

  // State to keep track of whether the user is on the "Sign In" or "Sign Up" screen
  const [isSignIn, setIsSignIn] = useState(true);

  // This function toggles between "Sign In" and "Sign Up" states
  const HandleSignIn = () => {
    setIsSignIn(!isSignIn);  // Toggle the isSignIn state when called
  };

  return (
    // Main container for the header, with a flexible layout and centered horizontally
    <div className='flex items-center justify-between z-10 w-[80%] m-auto pt-5 absolute top-0 left-0 right-0'>
      
      {/* Left section of the header - displays the logo */}
      <div className="nav-left w-[28vmin] w-max-[200px]">
        <Link to="/">  {/* Clicking the logo takes you to the homepage */}
          <img 
            src={LOGO} 
            alt="logo" 
            onClick={() => { setIsSignIn(true); }}  // Resets to "Sign In" state when logo is clicked
          />
        </Link>
      </div>

      {/* Right section of the header - shows "Sign In/Sign Up" button and language option */}
      <div className="nav-right flex justify-between items-center gap-3">
        
        {/* Shows "English" button only if on the "Sign In" screen */}
        {isSignIn && (
          <button className="border border-white px-[1.25em] py-[0.5em] rounded-md text-white">
            English  {/* Button to choose language */}
          </button>
        )}

        {/* Link to "Sign" page, which displays either "Sign In" or "Sign Up" based on the current state */}
        <Link to="/Sign">
          {isSignIn && (
            <button 
              className="border border-white px-[1.25em] bg-red-500 text-white box-border py-[0.5em] rounded-md font-bold" 
              onClick={HandleSignIn}  // Calls HandleSignIn to toggle between Sign In/Sign Up when button is clicked
            >
              {isSignIn ? "Sign In" : "Sign Up"}  {/* Text changes based on isSignIn state */}
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;