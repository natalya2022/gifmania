import React from 'react';
import GifGrid from './GifGrid';

const Trends = ({ gifs }) => {
  return (
    <main className="content">            
      <GifGrid gifs={gifs}/>
    </main>
  )
}

export default Trends;