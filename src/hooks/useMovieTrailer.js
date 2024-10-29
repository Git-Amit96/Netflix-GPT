import { useEffect, useState } from "react";
import { MoviesPopular_API, MoviesRated_API, MoviesUpcoming_API, options } from "../Utils/common";
import { useSelector, useDispatch } from 'react-redux';
import { addTrailerData } from "../Utils/movieSlice";

export const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const TrailerID = useSelector((store) => store.movies.popularMovies?.results?.[6]?.id);

  const getTrailer = async () => {
    if (!TrailerID) return;
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${TrailerID}/videos?language=en-US`, options);
      const json = await response.json();
      const info = json.results.filter((item) => item.type === "Trailer");
      dispatch(addTrailerData(info));
    } catch (error) {
      console.error("Error fetching trailer data:", error);
    }
  };

  useEffect(() => {
    getTrailer();
  }, [TrailerID]); // Fetch only when TrailerID changes
};

export const useTopRated = () => {
    const [topRated, setTopRated] = useState(null);
  
    useEffect(() => {
      const getTopRatedMovies = async () => {
        try {
          const response = await fetch(MoviesRated_API, options);
          const json = await response.json();
          setTopRated(json);
        } catch (error) {
          console.error("Error fetching top-rated movies:", error);
        }
      };
      getTopRatedMovies();
    }, []); // Fetch only once on mount
  
    return topRated;
  };
  
  export const useNowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
  
    useEffect(() => {
      const getNowPlaying = async () => {
        try {
          const response = await fetch(MoviesPopular_API, options);
          const json = await response.json();
          setNowPlaying(json);
        } catch (error) {
          console.error("Error fetching now playing movies:", error);
        }
      };
      getNowPlaying();
    }, []); // Fetch only once on mount
  
    return nowPlaying;
  };
  
  export const useUpcoming = () => {
    const [upcoming, setUpcoming] = useState(null);
  
    useEffect(() => {
      const getUpcoming = async () => {
        try {
          const response = await fetch(MoviesUpcoming_API, options);
          const json = await response.json();
          setUpcoming(json);
        } catch (error) {
          console.error("Error fetching upcoming movies:", error);
        }
      };
      getUpcoming();
    }, []); // Fetch only once on mount
  
    return upcoming;
  };