import { useEffect } from "react";
import { options } from "../Utils/common";
import { useSelector, useDispatch } from 'react-redux';
import { addTrailerData } from "../Utils/movieSlice";

export const useMovieTrailer = () => {
    
    const dispatch = useDispatch();
    const TrailerID = useSelector(store => store.movies.popularMovies?.results?.[1]?.id);

    const getTrailer = async () => {
        if (!TrailerID) return; 
        const response = await fetch(`https://api.themoviedb.org/3/movie/${TrailerID}/videos?language=en-US`, options);
        const json = await response.json();
        const info = json.results.filter((item) => item.type === "Trailer")
        dispatch(addTrailerData(info))
    };

    useEffect(() => {
        getTrailer();
    },[TrailerID]);
};