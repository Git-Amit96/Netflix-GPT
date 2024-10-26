// Importing the configureStore function from Redux Toolkit to create a Redux store.
import { configureStore } from "@reduxjs/toolkit";
// Importing the userReducer from UserSlice, which manages user-related state.
import userReducer from "./UserSlice";

// Configuring the Redux store
const AppStore = configureStore({
    // Defining the reducers that manage slices of the state.
    reducer: {
        // The 'user' key represents a slice of state managed by userReducer.
        // This maps the state at 'user' to be managed by userReducer.
        user: userReducer
    }
});

// Exporting the configured store to be used across the app
export default AppStore;