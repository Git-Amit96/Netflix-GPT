import React from 'react';
import { BackIMG } from '../Utils/common';
import Header from './Header';

const Login = () => {

  console.log("login page rendered")
  return (
    <div>
      <Header/>
      <div style={{ backgroundImage: `url(${BackIMG})` }} className="bg-cover  bg-center w-[100vw] h-[100vh] " >
        <div className='w-[100vw] h-[100vh] bg-gradient-to-b from-black via-black/[0.55] to-black absolute'>

          <div className='m-auto mt-[35vh] text-white w-[40vw]'>
            <h1 className='text-[3.5rem] font-black text-center'>Unlimited movies, TV shows and more</h1>
            <p className='text-[1.5rem] font-medium text-center'>Starts at ₹149. Cancel at any time</p>
            <p className='m-[1em] font-medium text-[1.1rem] text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex justify-between items-center'>
              <input type="text" placeholder='Email' className='bg-transparent text-white w-[60%] border border-white py-[0.5em] px-[1.25em] text-[1.3rem] rounded-md' />
              <button className='border border-white pl-2 bg-red-500 text-white box-border py-[0.5em] rounded-md font-bold w-[35%] text-[1.3rem]'>Get Started</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

//  export const SignUp=()=>{

// }

export default Login;