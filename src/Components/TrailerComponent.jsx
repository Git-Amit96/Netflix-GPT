import React, { useEffect, useState } from 'react';
import { useMovieTrailer } from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const TrailerComponent = () => {
  const trailerData = useSelector(store => store.movies.trailerInfo);
  const { title, overview } = useSelector(store => store.movies.popularMovies?.results?.[6] || {});
  useMovieTrailer();
  const [showInfo, setShowInfo] = useState(true);

  // Hide title and overview after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowInfo(false), 2000);
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return trailerData ? (
    <div
      className="bg-gradient-to-b from-black via-black/[0.77] to-black relative"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className='absolute top-0 left-0 w-full min-h-screen box-border z-5 flex items-center overflow-y-hidden opacity-70'>
        <iframe
          className="w-full h-full md:h-auto aspect-video"
          src={`https://www.youtube.com/embed/${trailerData[0]?.key}?si=z3cM6CxIOWLTv4xc&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Title and Overview with dynamic visibility */}
      <div
        className={`absolute w-[80%] md:w-[30%] text-white mt-[30vh] md:mt-[20vh] pl-4 md:pl-[3rem] transition-opacity duration-500 ${
          showInfo ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className='text-2xl md:text-5xl font-bold mb-[0.3em]'>{title}</h1>
        <p className='text-sm md:text-md font-normal '>{overview.slice(0, 100)}...</p>
        <div className='mt-4 md:mt-[1.3em] flex justify-start md:justify-between space-x-2 md:space-x-4 w-[90%] md:w-[60%]'>
          <button className='bg-slate-300 py-2 px-4 md:px-[1.9em] rounded-sm hover:opacity-85 text-black font-bold'>
            Play
          </button>
          <button className='bg-slate-700 px-4 md:px-[1.9em] rounded-sm hover:opacity-85 text-white font-bold'>
            More Info
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className='absolute top-0 left-0 w-full bg-slate-200 box-border z-5 min-h-screen'></div>
  );
};

export default TrailerComponent;