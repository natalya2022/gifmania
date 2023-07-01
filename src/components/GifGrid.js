import React from 'react';
import Card from './Card';

const GifGrid = () => {
  return (
    <section className="gif-grid" aria-label="Галерея">
      <ul className="gif-grid__places">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {cards.map(card => (
          <Card />
        ))} */}
      </ul>
    </section>
  );
};

export default GifGrid;
