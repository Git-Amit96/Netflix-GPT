import React from 'react';
import { BackIMG } from '../Utils/common';  // Import background image from common utilities
import Header from './Header';  // Import the Header component
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div>
      {/* Header component to display the top navigation bar */}
      <Header />

      {/* Main background image for the login page */}
      <div
        style={{ backgroundImage: `url(${BackIMG})` }}
        className="bg-cover bg-center w-[100vw] h-[100vh]"
      >

        {/* Overlay with gradient to create a darkened effect on the background image */}
        <div className='w-[100vw] h-[100vh] bg-gradient-to-b from-black via-black/[0.55] to-black absolute'>

          {/* Main content container for the login page */}
          <div className='m-auto mt-[35vh] text-white w-[40vw]'>

            {/* Title text for the login page */}
            <h1 className='text-[3.5rem] font-black text-center'>
              Unlimited movies, TV shows and more
            </h1>

            {/* Subtitle text with a brief offer */}
            <p className='text-[1.5rem] font-medium text-center'>
              Starts at ₹149. Cancel at any time
            </p>

            {/* Prompt to enter email to sign up or sign in */}
            <p className='m-[1em] font-medium text-[1.1rem] text-center'>
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            {/* Container for email input and "Get Started" button */}
            <div className='flex justify-center items-center'>

              {/* Email input field */}
              {/* <input
                type="text"
                placeholder='Email'
                className='bg-transparent text-white w-[60%] border border-white py-[0.5em] px-[1.25em] text-[1.3rem] rounded-md'
              /> */}

              {/* "Get Started" button to initiate membership */}
              <Link to="/Sign" className='s'>
                <button
                  className='border border-white bg-red-500 text-white box-border py-[0.5em] px-[1em] rounded-md font-bold text-[1.3rem]'
                >
                  Get Started
                </button>

              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;