import React from 'react';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';
import Footer from './Footer';
import Api from '../utils/api';
import { api } from '../utils/api';
import Card from './Card';
function App() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);
  const [randomGif, setRandomGif] = React.useState([]);
  console.log(randomGif);
  React.useEffect(() => {
    Promise.all([
      api.trending(),
      api.random()
    ])
    .then((res) => {
      setTrendingGifs(res[0].data);
      setRandomGif(res[1].data);
    })
    .catch((err) => {
      console.log(err.status);
    })
  }, []);
  function handleRandomClick() {
    api.random().then((res) => {
      setRandomGif(res.data);
    })
  }
  function handleClickMenu() {
    api.trending().then((res) => {
      setPage(1);
      setTrendingGifs(res.data);
    })
  }
  function handleSearchGifs(word) {
    api.search(word).then((res) => {
      setPage(1);
      setTrendingGifs(res.data);
    })
  }
  const [currentPage, setPage] = React.useState(1);
  const perPage = 9;
  function handleClick(evt) {
    setPage(Number(evt.target.id));
  }
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentList = trendingGifs.slice(indexOfFirst, indexOfLast);
  const renderList = currentList.map((page, index) => {
    return <Card  key={index} gif={page}></Card>;
  });
  const pageNumber = [];
  for (let i = 1; i<=Math.ceil(trendingGifs.length / perPage); i++) {
    pageNumber.push(i);
  }

  const renderPageNumber = pageNumber.map(number => {
    return (
      <li className='footer__page' key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });
  return (
    <div className="root">
      <div className="page">
        <div className="wrap">
          <Header onTrendClick={handleClickMenu} onRandomClick={handleRandomClick}/>
          <Routes>
            <Route path="/" element={<Search onSearch={handleSearchGifs} gifs={renderList} pageNumber={renderPageNumber}/>} />
            <Route path="/trends" element={<Trends gifs={renderList} pageNumber={renderPageNumber} />} />
            <Route path="/random" element={<Random gif={randomGif}/>} />
            <Route path="*" element={<Search to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
