import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import { useNowPlaying, useTopRated, useUpcoming } from '../hooks/useMovieTrailer';

const Body = () => {
  const posters = useSelector((store) => store.movies.popularMovies?.results);
  const topRated = useTopRated();
  const upcoming = useUpcoming();
  const playingNow = useNowPlaying();

  return (
    <div className="absolute top-[90vh] left-0 right-0 w-[90vw] mx-auto pb-4">
      {/* Top Rated Section */}
      <h2 className="text-2xl font-bold text-white mt-4 mb-2 text-shadow-lg">Top Rated</h2>
      <div className="flex items-center gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        {topRated ? (
          topRated.results.map((item) =>
            item.poster_path ? (
              <div key={item.id} className="flex-shrink-0">
                <Cards id={item.poster_path} />
              </div>
            ) : null
          )
        ) : (
          <div>Loading Top Rated...</div>
        )}
      </div>

      {/* Now Playing Section */}
      <h2 className="text-2xl font-bold text-white mt-4 mb-2 text-shadow-lg">Now Playing</h2>
      <div className="flex items-center gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        {posters ? (
          posters.map((item) =>
            item.poster_path ? (
              <div key={item.id} className="flex-shrink-0">
                <Cards id={item.poster_path} />
              </div>
            ) : null
          )
        ) : (
          <div>Loading Now Playing...</div>
        )}
      </div>

      {/* Upcoming Section */}
      <h2 className="text-2xl font-bold text-white mt-4 mb-2 text-shadow-lg">Upcoming</h2>
      <div className="flex items-center gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        {upcoming ? (
          upcoming.results.map((item) =>
            item.poster_path ? (
              <div key={item.id} className="flex-shrink-0">
                <Cards id={item.poster_path} />
              </div>
            ) : null
          )
        ) : (
          <div>Loading Upcoming...</div>
        )}
      </div>
        {/* Now Playing Section */}
        <h2 className="text-2xl font-bold text-white mt-4 mb-2 text-shadow-lg">Popular</h2>
      <div className="flex items-center gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
      {playingNow ? (
          playingNow.results.map((item) =>
            item.poster_path ? (
              <div key={item.id} className="flex-shrink-0">
                <Cards id={item.poster_path} />
              </div>
            ) : null
          )
        ) : (
          <div>Loading Upcoming...</div>
        )}
      </div>
      {/* Top Rated Section */}
      <h2 className="text-2xl font-bold text-white mt-4 mb-2 text-shadow-lg">Top Rated</h2>
      <div className="flex items-center gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        {topRated ? (
          topRated.results.map((item) =>
            item.poster_path ? (
              <div key={item.id} className="flex-shrink-0">
                <Cards id={item.poster_path} />
              </div>
            ) : null
          )
        ) : (
          <div>Loading Top Rated...</div>
        )}
      </div>
      {/* Now Playing Section */}
      <h2 className="text-2xl font-bold text-white mt-4 mb-2 text-shadow-lg">Now Playing</h2>
      <div className="flex items-center gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        {posters ? (
          posters.map((item) =>
            item.poster_path ? (
              <div key={item.id} className="flex-shrink-0">
                <Cards id={item.poster_path} />
              </div>
            ) : null
          )
        ) : (
          <div>Loading Now Playing...</div>
        )}
      </div>
    </div>
  );
};

export default Body;