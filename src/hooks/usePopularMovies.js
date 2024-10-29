import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { Movies_API, options } from "../Utils/common";

export const usePopularMovies = () => {

    const dispatch = useDispatch();
    const getMovies = async () => {
        const movieData = await fetch(Movies_API, options)
        const json = await movieData.json();
        dispatch(addPopularMovies(json));
        console.log(json);
    }

    useEffect(() => {
        getMovies();
    }, [])
}
