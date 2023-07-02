import React from 'react';
import GifGrid from './GifGrid';
import Footer from './Footer';

const Trends = ({ gifs, renderPages }) => {
  return (
    <>
    <main className="content">            
      <GifGrid gifs={gifs}/>
    </main>
    <Footer renderPages={renderPages}/>
    </>
  )
}

export default Trends;