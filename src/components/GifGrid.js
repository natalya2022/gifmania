import React from 'react';
import Card from './Card';

const GifGrid = ({ gifs }) => {
  //console.log(gifs);
  return (
    <section className="gif-grid" aria-label="Галерея">
      <ul className="gif-grid__places">
         {gifs.map((gif) => 
            <Card gif={gif} />
         )}
      </ul>
    </section>
  );
};

export default GifGrid;
