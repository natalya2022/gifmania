import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import { api } from '../utils/api';
import ToolMessage from './ToolMessage';

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchGifs, setSearchGifs] = useState([]);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [randomGif, setRandomGif] = useState({});
  const [isToolMessageOpen, setIsToolMessageOpen] = useState(false);
  const [toolMessageText, setToolMessageText] = useState({ text: '' });
  const [changeTheme, setChangeTheme] = useState(false);

  React.useEffect(() => {
    Promise.all([api.trending(), api.random()])
      .then(res => {
        setTrendingGifs(res[0].data);
        setRandomGif(res[1].data);
        setGifs(res[0].data);
        setSearchGifs(res[0].data);
      })
      .catch(err => {
        console.log(err.status);
      });
  }, []);
  //Смена темы
  function handleChangeTheme() {
    setChangeTheme(!changeTheme);
  }
  //Клики меню
  function handleSearchMenuClick() {
    setPage(1);
    setGifs(searchGifs);
  }
  function handleRandomMenuClick() {
    api.random().then(res => {
      setRandomGif(res.data);
      setGifs(trendingGifs);
      setPage(1);
    })
    .catch((err) => {
      console.log(err.status);
    });
  }
  function handleTrendsMenuClick() {
    api.trending().then(res => {
      setPage(1);
      setGifs(res.data);
      setSearchGifs(searchGifs);
    })
    .catch((err) => {
      console.log(err.status);
    });
  }
  //Пагинация
  const [currentPage, setPage] = React.useState(1);
  const perPage = 6;
  function handleSelectPageClick(evt) {
    setPage(Number(evt.target.id));
  }
  function handlePagDownClick() {    
    if (currentPage !== 1) {
      setPage(currentPage - 1);
    }
  }
  function handlePagUpClick() {
    if (currentPage !== pageNumber.length) {
      setPage(currentPage + 1);
    }
  }
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentList = gifs.slice(indexOfFirst, indexOfLast);
  const renderList = currentList.map((page, index) => {
    return <Card key={index} gif={page} isTheme={changeTheme}></Card>;
  });
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(gifs.length / perPage); i++) {
    pageNumber.push(i);
  }
  const renderPageNumber = pageNumber.map(number => {
    const style = 'pagination__page' + (currentPage === number ? ' active' : '');
    return (
      <li className={changeTheme? `${style} pagination__page_light-theme` : `${style}`} key={number} id={number} onClick={handleSelectPageClick}>
        {number}
      </li>
    );
  });
  //Блок попапа с сообщением
  function handleToolMessageOpen() {
    setIsToolMessageOpen(true);
  }
  const closeMessage = () => {
    setIsToolMessageOpen(false);
  };
  //Поиск гифок
  function handleSearchGifs(word) {
    if (word === '') {
      setToolMessageText({ text: 'Введите поисковый запрос!' });
      handleToolMessageOpen();
      return;
    }
    api.search(word).then(res => {      
      if (res.data.length === 0) {
        setToolMessageText({ text: 'Результатов не найдено!' });
        handleToolMessageOpen();
      } else {
        setPage(1);
        setGifs(res.data);
        setSearchGifs(res.data);
      }
    })
    .catch((err) => {
      console.log(err.status);
    });
  }

  return (
    <div className={changeTheme? `root light-theme` : `root`}>
      <div className={changeTheme? `page light-theme`: `page`}>
        <div className="wrap">
          <Header
            onRandomClick={handleRandomMenuClick}
            onTrendClick={handleTrendsMenuClick}
            onSearchClick={handleSearchMenuClick}
            onChangeTheme={handleChangeTheme}
            isTheme={changeTheme}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Search
                  gifs={renderList}
                  onSearch={handleSearchGifs}
                  renderPages={renderPageNumber}
                  onDownClick={handlePagDownClick}
                  onUpClick={handlePagUpClick}
                  currentPage={currentPage}
                  maxPage={pageNumber.length}
                  isTheme={changeTheme}
                />
              }
            />
            <Route
              path="/trends"
              element={
                <Trends
                  gifs={renderList}
                  renderPages={renderPageNumber}
                  onDownClick={handlePagDownClick}
                  onUpClick={handlePagUpClick}
                  currentPage={currentPage}
                  maxPage={pageNumber.length}
                  isTheme={changeTheme}
                />
              }
            />
            <Route path="/random" element={<Random gif={randomGif} gifs={renderList} isTheme={changeTheme} />} />
            <Route path="*" element={<Search to="/" replace />} />
          </Routes>
          <Footer isTheme={changeTheme}/>
          <ToolMessage
            onClose={closeMessage}
            toolMessage={toolMessageText}
            isOpen={isToolMessageOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
