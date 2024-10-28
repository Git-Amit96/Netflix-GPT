import React, { Suspense } from 'react';
import { usePopularMovies } from '../hooks/usePopularMovies';
import HeaderMain from './HeaderMain';

const TrailerComponent = React.lazy(() => import('./TrailerComponent'));

const Browse = () => {  
  usePopularMovies();
  
  return (
    <div className="bg-black h-[200vh] relative top-0 left-0 right-0">
      <HeaderMain />
      <Suspense fallback={<div>Loading Trailer...</div>}>
        <TrailerComponent />
      </Suspense>
    </div>
  );
};

export default Browse;