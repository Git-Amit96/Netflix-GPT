import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BackIMG } from '../Utils/common';
import { LOGO } from '../Utils/common';
import { Validate } from "../Utils/Validate";
import { auth } from '../Utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';

const Sign = () => {
    console.log("Sign inside singin page")
    const [isUserLogged, setIsUserLogged] = useState(true);
    const [isMessage, setIsMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const HandleValidation = () => {
        const validation = Validate(email.current.value, password.current.value);
        setIsMessage(validation);
        if (validation) return;

        if (!isUserLogged) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "-" + errorMessage)
                    setIsMessage(errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "-" + errorMessage)
                    setIsMessage(errorMessage)
                });

        }
    }

    const toggleSignIn = () => {
        setIsUserLogged(!isUserLogged)
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${BackIMG})` }} className="bg-cover  bg-center w-[100vw] h-[100vh] " >
                <div className='w-[100vw] h-[100vh] bg-gradient-to-b from-black via-black/[0.42] to-black/[0.77] absolute'>
                    <div className="w-[28vmin] w-max-[200px] ml-[10vw] pt-5 ">
                        <Link to="/">
                            <img src={LOGO} alt="logo" />
                        </Link>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault() }} className='m-auto mt-[6vh] text-white w-[60vmin]  rounded-md p-[2em] bg-black bg-opacity-70'>
                        <h1 className='text-[1.5rem] font-black '>{isUserLogged ? "Sign In" : "Sign Up"}</h1>
                        {!isUserLogged && <input type="text" placeholder='Name' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />}
                        {!isUserLogged && <input type="number" placeholder='Mobile No.' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md appearance-none' />}
                        <input ref={email} type="text" placeholder='Email' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />
                        <input ref={password} type="password" placeholder='Password' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />
                        <p className='text-red-700 font-normal py-2'>{isMessage}</p>
                        <button className='border border-white pl-2 bg-red-500 text-white box-border  rounded-md font-bold w-[100%]  mt-[0.8em] p-[0.5em] text-center' onClick={HandleValidation}>{isUserLogged ? "Sign In" : "Sign Up"}</button>
                        <p className='text-gray-500 font-medium  mt-[0.8em] p-[0.5em]' >{!isUserLogged ? "Already Registered? " : "New to Netflix? "}<span className='text-white font-bold cursor-pointer' onClick={toggleSignIn}>{!isUserLogged ? "Sign In" : "Sign Up"} now</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign;