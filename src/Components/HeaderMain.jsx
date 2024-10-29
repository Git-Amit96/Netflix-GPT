import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { removeUser } from '../Utils/UserSlice';
import { LOGO } from '../Utils/common';

const HeaderMain = ({ scrollContainerRef }) => {
    const dispatch = useDispatch();
    const image = useSelector(store => store.user);

    const [bgColor, setBgColor] = useState('bg-transparent');
    const [showMenu, setShowMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);  // Toggle user menu visibility

    const handleScroll = () => {
        if (scrollContainerRef.current.scrollTop > 50) {
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
        <div 
            className={`flex flex-col md:flex-row justify-between items-center text-white z-20 px-4 md:px-[3rem] py-2 md:py-[0.7rem] fixed top-0 left-0 right-0 transition-colors duration-500 ${bgColor}`}
            onClick={() => setShowUserMenu(!showUserMenu)}  // Toggle user menu on header click
        >
            <div className="flex justify-between items-center w-full md:w-auto">
                <div className="w-[18vmin] max-w-[150px] mr-[1rem]">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                
                {/* Navigation menu positioned next to the logo for larger screens */}
                <nav className={`hidden md:flex items-center space-x-6`}>
                    <ul className="flex flex-row list-none font-[500] text-sm gap-[1em]">
                        <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Home</li>
                        <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>TV Shows</li>
                        <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Movies</li>
                        <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>My List</li>
                        <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>New & Popular</li>
                        <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Browse by Languages</li>
                    </ul>
                </nav>

                <button className="md:hidden text-white" onClick={() => setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            
            {/* Mobile menu */}
            <nav className={`flex-col md:hidden items-center justify-between w-full ${showMenu ? 'flex' : 'hidden'}`}>
                <ul className="flex flex-col list-none space-y-2 font-[500] text-sm">
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Home</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>TV Shows</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Movies</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>My List</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>New & Popular</li>
                    <li className='text-gray-300 hover:text-gray-400 cursor-pointer'>Browse by Languages</li>
                </ul>
            </nav>

            {/* User menu - only visible when showUserMenu is true */}
            {showUserMenu && (
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    {image && <img src={image?.photoURL} alt="User" className='w-10 h-10 rounded-md' />}
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md font-bold"
                        onClick={signOutUser}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default HeaderMain;


