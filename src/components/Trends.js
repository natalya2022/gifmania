import React from 'react';
import GifGrid from './GifGrid';

const Trends = ({ gifs, pageNumber }) => {
  return (
    <main className="content">
      <GifGrid gifs={gifs} />
    </main>
  );
};

export default Trends;
