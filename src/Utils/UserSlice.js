// Importing the createSlice function from Redux Toolkit to simplify creating a slice of the Redux state.
import { createSlice } from "@reduxjs/toolkit";

// Defining a slice for user information with an initial state and reducers to manage actions.
const UserSlice = createSlice({
    name: "user",  // Name of the slice, used to identify the slice's actions and state.
    initialState: null,  // Initial state for the slice, set to null, meaning no user is logged in initially.
    
    // Reducers define functions that determine how the state changes in response to actions.
    reducers: {
        // `addUser` reducer to update the state with new user information.
        addUser: (state, action) => {
            return action.payload;  // Adds a new user to the list
        },
        
        // `removeUser` reducer to clear user information from the state.
        removeUser: (state, action) => {
            return null; // Removes a user by id
        }
    }
});

// Exporting the reducer to be used in the Redux store.
export default UserSlice.reducer;

// Exporting actions `addUser` and `removeUser` to be used in components for dispatching.
export const { addUser, removeUser } = UserSlice.actions;