import React from 'react';
import baikal from './../images/baikal.jpg'; 

const Card = () => {
  return (
    <li className="gif-grid__place">
      <img src={baikal} alt="Байкал" className="gif-grid__picture" />
      <div className="gif-grid__rectangle">
        <h2 className="gif-grid__title">Название</h2>
      </div>
    </li>
  );
};

export default Card;
