import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';
import Footer from './Footer';
import Api from '../utils/api';
import { api } from '../utils/api'
function App() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);
  const [randomGif, setRandomGif] = React.useState([]);
  React.useEffect(() => {
    Promise.all([
      api.trending(),
      api.random()
    ])
    .then((res) => {
      //console.log(res[0]);
      setTrendingGifs(res[0].data);
      setRandomGif(res[1].data);
      //console.log(res[1].data);
    })
    .catch((err) => {
      console.log(err.status);
    })
  }, []);

  function handleSearchGifs(word) {
    api.search(word).then((res) => {
      console.log(res);
      setTrendingGifs(res.data);
    })
  }
  return (
    <div className="root">
      <div className="page">
        <div className="wrap">
          <Header />
          <Routes>
            <Route path="/" element={<Search gifs={trendingGifs} onSearch={handleSearchGifs} />} />
            <Route path="/trends" element={<Trends gifs={trendingGifs} />} />
            <Route path="/random" element={<Random gif={randomGif}/>} />
            <Route path="*" element={<Search to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
