import React from 'react';

const GifGrid = ({ gifs }) => {  
  return (
    <section className="gif-grid" aria-label="Галерея">
      <ul className="gif-grid__places">
        {gifs}
      </ul>
    </section>
  );
};

export default GifGrid;
