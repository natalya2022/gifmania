import React from 'react';
import GifGrid from './GifGrid';
import Pagination from './Pagination';
const Trends = ({ gifs, renderPages, OnDownClick, onUpClick }) => {
  return (
    <>
    <main className="content">
      <GifGrid gifs={gifs} />
    </main>
    <Pagination renderPages={renderPages} OnDownClick={OnDownClick} onUpClick={onUpClick}/>
    </>
  );
};

export default Trends;