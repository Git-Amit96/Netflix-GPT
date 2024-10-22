import React from 'react';
import { LOGO } from '../Utils/common';

const Header = () => {
  return (
    <div className='flex items-center justify-between z-10  w-[80%] m-auto pt-5 absolute top-0 left-0 right-0 '>
      <div className="nav-left w-[28vmin] w-max-[200px] ">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="nav-right flex justify-between items-center gap-3">
        <button className="border border-white px-[1.25em] py-[0.5em] rounded-md  text-white ">English</button>
        <button className="border border-white px-[1.25em] bg-red-500 text-white box-border py-[0.5em] rounded-md font-bold">Sign In</button>
      </div>
    </div>
  );
};

export default Header;