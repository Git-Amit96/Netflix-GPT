import React from 'react';
import { BackIMG } from '../Utils/common';
import Header from './Header';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Header />

      <div
        style={{ backgroundImage: `url(${BackIMG})` }}
        className="bg-cover bg-center w-full h-screen"
      >
        <div className='w-full h-full bg-gradient-to-b from-black via-black/[0.55] to-black absolute flex items-center'>
          <div className='text-white w-[90%] max-w-[600px] mx-auto text-center px-4'>

            <h1 className='text-3xl md:text-5xl font-black leading-tight'>
              Unlimited movies, TV shows and more
            </h1>

            <p className='text-lg md:text-2xl font-medium mt-4'>
              Starts at ₹149. Cancel at any time
            </p>

            <p className='mt-4 font-medium text-base md:text-lg'>
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className='flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4'>
              
              {/* Email input field */}
              <input
                type="text"
                placeholder='Email'
                className='bg-transparent text-white w-full md:w-[60%] border border-white py-3 px-4 text-lg rounded-md'
              />

              <Link to="/Sign">
                <button
                  className='border border-white bg-red-500 text-white py-3 px-6 rounded-md font-bold text-lg w-full md:w-auto'
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
