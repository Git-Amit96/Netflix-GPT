import { Poster_IMG } from '../Utils/common';

const Cards = ({ id }) => {
  return (
    <div className="w-[200px] aspect-[3/4]  snap-start m-2 overflow-hidden rounded-lg border border-gray-700  transition-all transform hover:scale-105">
      <div className="relative">
        <img src={`${Poster_IMG}${id}`} alt="post" className="w-full h-full object-cover" />

        {/* Persistent Glowing Border Effect */}
        <div className="absolute inset-0 rounded-lg border border-gray-700"></div>
      </div>
    </div>
  );
};

export default Cards;
