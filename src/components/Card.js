import React from 'react';

const Card = ({ gif, isTheme }) => {
  return (
    <li className={isTheme? `gif-grid__place gif-grid__place_light-theme` : `gif-grid__place`}>
      <img src={gif.images.downsized.url} alt={gif.title} className="gif-grid__picture" />
      <div className="gif-grid__rectangle">
        <h2 className={isTheme? `gif-grid__title gif-grid__title_light-theme` : `gif-grid__title`}>{gif.title}</h2>
      </div>
    </li>
  );
};

export default Card;
