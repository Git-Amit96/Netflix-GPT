import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BackIMG, LOGO } from '../Utils/common';  // Import background image and logo from utilities
import { Validate } from "../Utils/Validate";  // Custom validation function for email and password
import { auth } from '../Utils/Firebase';  // Firebase authentication instance
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';  // Firebase authentication methods
import { updateProfile } from 'firebase/auth';  // Function to update user profile
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/UserSlice';  // Redux action to add user info to state

const Sign = () => {
    const dispatch = useDispatch();
    const [isUserLogged, setIsUserLogged] = useState(true);  // Tracks if user is on Sign In or Sign Up mode
    const [isMessage, setIsMessage] = useState(null);  // Stores validation or error messages

    // Refs for input fields
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const mobile = useRef(null);

    // Function to validate input and handle authentication (Sign In / Sign Up)
    const HandleValidation = () => {
        // Validate email and password inputs
        const validation = Validate(email.current.value, password.current.value);
        setIsMessage(validation);  // Set validation message if invalid input
        if (validation) return;  // Stop execution if validation fails

        // Check if in Sign Up mode
        if (!isUserLogged) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
                        phoneNumber: mobile.current.value,
                    }).then(() => {
                        const { uid, email, displayName, photoURL, phoneNumber } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL, phoneNumber }));
                        console.log("Profile updated");  // Log when profile is successfully updated
                    }).catch((error) => {
                        setIsMessage(error.message);  // Display error if profile update fails
                    });
                    // console.log(user);  // Log user data after successful sign up
                })
                .catch((error) => {
                    setIsMessage(`${error.code} - ${error.message}`);  // Display sign-up error message
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    // console.log(user);  // Log user data after successful sign in
                })
                .catch((error) => {
                    setIsMessage(`${error.code} -> ${error.message}`);  // Display sign-in error message
                });
        }
    };

    // Toggle between Sign In and Sign Up forms
    const toggleSignIn = () => {
        setIsUserLogged(!isUserLogged);
    };

    return (
        <div>
            {/* Background image for the sign-in/sign-up page */}
            <div style={{ backgroundImage: `url(${BackIMG})` }} className="bg-cover bg-center w-[100vw] h-[100vh]">
                {/* Overlay with gradient to darken background */}
                <div className='w-[100vw] h-[100vh] bg-gradient-to-b from-black via-black/[0.42] to-black/[0.77] absolute'>
                    
                    {/* Logo at the top left corner */}
                    <div className="w-[28vmin] w-max-[200px] ml-[10vw] pt-5">
                        <Link to="/">
                            <img src={LOGO} alt="logo" />
                        </Link>
                    </div>

                    {/* Form container for Sign In / Sign Up */}
                    <form onSubmit={(e) => e.preventDefault()} className='m-auto mt-[6vh] text-white w-[60vmin] rounded-md p-[2em] bg-black bg-opacity-70'>
                        
                        {/* Heading changes based on Sign In / Sign Up mode */}
                        <h1 className='text-[1.5rem] font-black'>{isUserLogged ? "Sign In" : "Sign Up"}</h1>

                        {/* Additional fields for Sign Up only */}
                        {!isUserLogged && <input ref={name} type="text" placeholder='Name' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />}
                        {!isUserLogged && <input ref={mobile} type="number" placeholder='Mobile No.' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md appearance-none' />}

                        {/* Email and Password fields */}
                        <input ref={email} type="text" placeholder='Email' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />
                        <input ref={password} type="password" placeholder='Password' className='w-[100%] bg-transparent border border-gray-400 p-[0.6em] mt-[0.8em] text-white rounded-md' />

                        {/* Validation or error messages */}
                        <p className='text-red-700 font-normal py-2'>{isMessage}</p>

                        {/* Button to submit the form and handle validation */}
                        <button className='border border-white pl-2 bg-red-500 text-white box-border rounded-md font-bold w-[100%] mt-[0.8em] p-[0.5em] text-center' onClick={HandleValidation}>
                            {isUserLogged ? "Sign In" : "Sign Up"}
                        </button>

                        {/* Link to toggle between Sign In and Sign Up forms */}
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