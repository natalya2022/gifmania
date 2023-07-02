import React from 'react';
import Card from './Card';

const GifGrid = ({ gifs }) => {  
  return (
    <section className="gif-grid" aria-label="Галерея">
      <ul className="gif-grid__places">
        {gifs.map(gif => (
          <Card key={gif.id} gif={gif} />
        ))}
      </ul>
    </section>
  );
};

export default GifGrid;
