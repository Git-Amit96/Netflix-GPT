import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../Utils/UserSlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useSelector } from 'react-redux';

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const image = useSelector(store => store.user)
  

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      dispatch(removeUser());
    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <div>
      <h1>This is Browse Page</h1>
      {console.log("phototUrl: ", image)};
      <button onClick={signOutUser}>Sign Out</button>
      {image && <img src={image?.photoURL} alt="" className='w-[20px] rounded-[50%] '/>}
    </div>
  );
};

export default Browse;