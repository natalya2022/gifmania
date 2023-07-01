import React from 'react';
import GifGrid from './GifGrid';
import Card from './Card';

const Random = ({ gif }) => {
  console.log(gif);
  return (
    <main className="content">            
      <GifGrid gifs={gif}/>
    </main>
  )
}

export default Random;
