import React, { useState } from 'react';
import { LOGO } from '../Utils/common';
import { Link } from 'react-router-dom';

// https://netflixgpt-bd4b9.web.app

const Header = () => {

  const [isSignIn, setIsSignIn]= useState(true);

  const HandleSignIn=()=>{
    setIsSignIn(!isSignIn);
  }

  console.log("Header")
  return (
    <div className='flex items-center justify-between z-10  w-[80%] m-auto pt-5 absolute top-0 left-0 right-0 '>
      <div className="nav-left w-[28vmin] w-max-[200px] ">
        <Link to="/">
          <img src={LOGO} alt="logo" onClick={()=>{setIsSignIn(true)}}/>
        </Link>
      </div>
      <div className="nav-right flex justify-between items-center gap-3">
        {isSignIn && <button className="border border-white px-[1.25em] py-[0.5em] rounded-md  text-white ">English</button>}
        <Link to="/Sign">
        {console.log("Sign in button inside header")}
          {isSignIn && <button className="border border-white px-[1.25em] bg-red-500 text-white box-border py-[0.5em] rounded-md font-bold" onClick={HandleSignIn}>{isSignIn? "Sign In" : "Sign Up"}</button>}
        </Link>
      </div>
    </div>
  );
};

export default Header;