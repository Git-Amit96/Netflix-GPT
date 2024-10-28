import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: null,
        trailerInfo: null,
    },
    reducers: {
        addPopularMovies: (state, actions) => {
            state.popularMovies = actions.payload;
        },
        addTrailerData: (state, actions) => {
            state.trailerInfo = actions.payload;
        }
    },
})

export const { addPopularMovies, addTrailerData } = movieSlice.actions;
export default movieSlice.reducer;