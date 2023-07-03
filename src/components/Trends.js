import React from 'react';
import GifGrid from './GifGrid';
import Pagination from './Pagination';
const Trends = ({ gifs, renderPages, onDownClick, onUpClick, currentPage, maxPage }) => {
  return (
    <main className="content">
      <GifGrid gifs={gifs} />      
      <Pagination renderPages={renderPages} onDownClick={onDownClick} onUpClick={onUpClick} currentPage={currentPage} maxPage={maxPage}/>
    </main>
  );
};

export default Trends;
