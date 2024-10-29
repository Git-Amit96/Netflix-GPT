import React, { Suspense, useRef } from 'react';
import { usePopularMovies } from '../hooks/usePopularMovies';
import HeaderMain from './HeaderMain';

const TrailerComponent = React.lazy(() => import('./TrailerComponent'));
const Body = React.lazy(() => import('./Body'));

const Browse = () => {  
  const scrollContainerRef = useRef(null);
  usePopularMovies();
  
  return (
    <div ref={scrollContainerRef} className="bg-black relative top-0 left-0 right-0 min-h-screen overflow-y-auto">
      <HeaderMain scrollContainerRef={scrollContainerRef} />
      <Suspense fallback={<div>Loading Trailer...</div>}>
        <TrailerComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Trailer...</div>}>
        <Body />
      </Suspense>
    </div>
  );
};

export default Browse;