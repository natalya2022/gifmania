import React from 'react';
import GifGrid from './GifGrid';
import Pagination from './Pagination';
const Trends = ({ gifs, renderPages }) => {
  return (
    <main className="content">
      <GifGrid gifs={gifs} />
      <Pagination renderPages={renderPages} />
    </main>
  );
};

export default Trends;
