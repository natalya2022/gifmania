import React from 'react';
import Card from './Card';

const Random = ({ gif }) => {
  return (
    <main className="content">            
      <Card gif={gif} />
    </main>
  )
}

export default Random;
