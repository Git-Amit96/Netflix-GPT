import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BackIMG, LOGO, userLogo } from '../Utils/common';
import { Validate } from "../Utils/Validate";
import { auth } from '../Utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/UserSlice';

const Sign = () => {
    const dispatch = useDispatch();
    const [isUserLogged, setIsUserLogged] = useState(true);
    const [isMessage, setIsMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const mobile = useRef(null);

    const HandleValidation = () => {
        const validation = Validate(email.current.value, password.current.value);
        setIsMessage(validation);
        if (validation) return;

        if (!isUserLogged) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: userLogo,
                        phoneNumber: mobile.current.value,
                    }).then(() => {
                        const { uid, email, displayName, photoURL, phoneNumber } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL, phoneNumber }));
                    }).catch((error) => {
                        setIsMessage(error.message);
                    });
                })
                .catch((error) => {
                    setIsMessage(`${error.code} - ${error.message}`);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => {})
                .catch((error) => {
                    setIsMessage(`${error.code} -> ${error.message}`);
                });
        }
    };

    const toggleSignIn = () => {
        setIsUserLogged(!isUserLogged);
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${BackIMG})` }} className="bg-cover bg-center w-full h-full min-h-screen">
                <div className='w-full h-full bg-gradient-to-b from-black via-black/[0.42] to-black/[0.77] absolute'>

                    <div className="w-[28vmin] max-w-[200px] ml-[10vw] pt-5">
                        <Link to="/">
                            <img src={LOGO} alt="logo" />
                        </Link>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className='m-auto mt-[8vh] text-white w-[90%] max-w-[480px] rounded-md p-[1.5em] md:p-[2em] bg-black bg-opacity-70'>
                        <h1 className='text-[1.5rem] md:text-2xl font-black'>{isUserLogged ? "Sign In" : "Sign Up"}</h1>

                        {!isUserLogged && <input ref={name} type="text" placeholder='Name' className='w-full bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />}
                        {!isUserLogged && <input ref={mobile} type="number" placeholder='Mobile No.' className='w-full bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md appearance-none' />}

                        <input ref={email} type="text" placeholder='Email' className='w-full bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />
                        <input ref={password} type="password" placeholder='Password' className='w-full bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />

                        <p className='text-red-700 font-normal py-2'>{isMessage}</p>

                        <button className='border border-white pl-2 bg-red-500 text-white box-border rounded-md font-bold w-full mt-[0.8em] p-[0.5em] text-center' onClick={HandleValidation}>
                            {isUserLogged ? "Sign In" : "Sign Up"}
                        </button>

                        <p className='text-gray-500 font-medium mt-[0.8em] p-[0.5em]'>
                            {!isUserLogged ? "Already Registered? " : "New to Netflix? "}
                            <span className='text-white font-bold cursor-pointer' onClick={toggleSignIn}>{!isUserLogged ? "Sign In" : "Sign Up"} now</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign;