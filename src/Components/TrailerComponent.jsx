import React from 'react';
import { useMovieTrailer } from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const TrailerComponent = () => {
  const trailerData = useSelector(store => store.movies.trailerInfo);
  const { title, overview } = useSelector(store => store.movies.popularMovies?.results?.[6] || {});
  useMovieTrailer();

  return trailerData ? (
    <div className='bg-gradient-to-b from-black via-black/[0.77] to-black'>
      <div className='absolute top-0 left-0 w-[100%]  h-[105vh] box-border z-5  flex  items-center overflow-y-hidden opacity-70'>
        <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailerData[0]?.key}?si=z3cM6CxIOWLTv4xc&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className=' absolute w-[30%] text-white mt-[30vh] opacity-100 pl-[3rem]'>
        <h1 className='text-5xl font-bold mb-[0.3em]'>{title}</h1>
        <p className='text-md font-normal '>{overview.slice(0,100)}...</p>
        <div className='mt-[1.3em] flex justify-between w-[60%]'>
          <button className='bg-slate-300 py-[0.5em] px-[1.9em] rounded-sm hover:opacity-85 text-black font-bold'>Play</button>
          <button className='bg-slate-700 px-[1.9em] rounded-sm hover:opacity-85 text-white font-bold'>More Info</button>
        </div>
      </div>

    </div>
  ) : <div className='absolute top-0 left-0 w-[100%] bg-slate-200 box-border z-5 h-[100vh] '></div>;
};

export default TrailerComponent;