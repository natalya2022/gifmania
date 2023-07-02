import React from 'react';
import GifGrid from './GifGrid';

const Random = ({ gif, gifs }) => {
  if (!gif?.images?.downsized?.url) {return <></>};  
  return (
    <main className="content">
      <div className="container">
        <img src={gif.images.downsized.url} alt={gif.title} className="container__image" />
        <h2 className="container__title">{gif.title}</h2>
      </div>
      <GifGrid gifs={gifs} />
    </main>
  );
};

export default Random;
