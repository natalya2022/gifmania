import React from 'react';
import { NavLink } from 'react-router-dom';
import GifGrid from './GifGrid';

const Random = ({ gif, gifs, isTheme }) => {
  if (!gif?.images?.downsized?.url) {return <></>};  
  return (
    <main className="content">
      <div className="container">
        <img src={gif.images.downsized.url} alt={gif.title} className="container__image" />
        <h2 className={isTheme? `container__title container__title_light-theme` : `container__title`}>{gif.title}</h2>
      </div>
      <div className='trends'>
        <NavLink to="/trends" className={isTheme ? `header__link header__link_light-theme` : `header__link`}>Трендовые гифки</NavLink>
      </div>
      <GifGrid gifs={gifs} />
    </main>
  );
};

export default Random;
