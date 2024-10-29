import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { removeUser } from '../Utils/UserSlice';
import { LOGO } from '../Utils/common';

const HeaderMain = ({ scrollContainerRef }) => {
    const dispatch = useDispatch();
    const image = useSelector(store => store.user);

    const [bgColor, setBgColor] = useState('bg-transparent'); // Initial background color

    const handleScroll = () => {
        if (scrollContainerRef.current.scrollTop > 50) { // Check scroll on container
            setBgColor('bg-black');
        } else {
            setBgColor('bg-transparent');
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, [scrollContainerRef]);

    const signOutUser = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
        }).catch((error) => {
            console.error("Sign out error: ", error);
        });
    };

    return (
        <div className={`flex justify-between items-center text-white z-20 px-[3rem] py-[0.7rem] fixed top-0 left-0 right-0 transition-colors duration-500 ${bgColor}`}>
            <div className="w-[60%] flex justify-start items-center">
                <div className="w-[18vmin] max-w-[150px] mr-[2rem]">
                    <img src={LOGO} alt="Logo" />
                </div>
                <nav className='flex justify-between items-center list-none w-[65%] font-[500] text-sm'>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Home</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>TV Shows</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Movies</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>My List</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>New & Popular</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Browse by Languages</li>
                </nav>
            </div>
            <div className='flex justify-between items-center w-[160px]'>
                {image && <img src={image?.photoURL} alt="User" className='w-[2.5rem] rounded-md mr-[1em]' />}
                <button
                    className="px-[1em] bg-red-500 text-white box-border py-[0.5em] rounded-md font-bold"
                    onClick={signOutUser}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default HeaderMain;