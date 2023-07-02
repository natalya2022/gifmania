import React from 'react';

const Card = ({ gif }) => {
  // console.log(gif);
  return (
    <li className="gif-grid__place">
      <img src={gif.images.downsized.url} alt={gif.title} className="gif-grid__picture" />
      <div className="gif-grid__rectangle">
        <h2 className="gif-grid__title">{gif.title}</h2>
      </div>
    </li>
  );
};

export default Card;
