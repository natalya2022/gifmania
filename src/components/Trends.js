import React from 'react';
import GifGrid from './GifGrid';
import Footer from './Footer';

const Trends = ({ gifs, pageNumber }) => {
  return (
    <main className="content">            
            <GifGrid gifs={gifs}/>
      <Footer pageNumber={pageNumber}/>
    </main>
  )
}

export default Trends;