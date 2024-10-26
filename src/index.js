import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Components/Login"; // Login component for the homepage
import Browse from "./Components/Browse"; // Browse component for authenticated users
import Sign from "./Components/Sign"; // Sign-up/Sign-in component
import {createBrowserRouter, RouterProvider, Outlet, useNavigate} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import AppStore from "./Utils/AppStore"; // Redux store
import { onAuthStateChanged } from "firebase/auth"; // Firebase authentication listener
import { auth } from "./Utils/Firebase"; // Firebase authentication instance
import { addUser, removeUser } from "./Utils/UserSlice"; // Redux actions for adding/removing users

// Root element to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Main App component handling authentication and navigation
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase listener to check if user is logged in or not
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL, phoneNumber } = user;
        dispatch(addUser({ uid, email, displayName, photoURL, phoneNumber })); // Dispatch user data to Redux store
        navigate("/browse"); // Redirect authenticated user to Browse page
      } else {
        // No user is signed in
        dispatch(removeUser()); // Clear user data from Redux store
        navigate("/"); // Redirect to Login page
      }
    });
  }, [dispatch, navigate]); // Dependencies to avoid unnecessary re-renders

  return (
    <React.Fragment>
      <Outlet /> {/* Renders nested routes based on URL path */}
    </React.Fragment>
  );
};

// Router configuration for the app's main pages
const appRouter = createBrowserRouter([
  {
    path: "/", // Root path for the App component
    element: <App />,
    children: [
      {
        path: "/", // Login page at root path
        element: <Login />,
      },
      {
        path: "/browse", // Browse page for authenticated users
        element: <Browse />,
      },
      {
        path: "/sign", // Sign-up/Sign-in page
        element: <Sign />,
      },
    ],
  },
]);

// Wrapping RouterProvider with Redux Provider to pass the store throughout the app
root.render(
  <Provider store={AppStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
