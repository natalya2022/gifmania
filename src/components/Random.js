import React from 'react';
// import GifGrid from './GifGrid';
// import Card from './Card';

const Random = ({ gif }) => {
  console.log('11', gif);
  return (
    <main className="content">
      {/* <Card gif={gif} /> */}
      <img src={gif.images.downsized.url} alt={gif.title} className="gif-grid__picture" />
      <div className="gif-grid__rectangle">
        <h2 className="gif-grid__title">{gif.title}</h2>
      </div>
    </main>
  );
};

export default Random;
