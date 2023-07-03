import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';
import Pagination from './Pagination';
import Card from './Card';
// import Api from '../utils/api';
import { api } from '../utils/api';
import ToolMessage from './ToolMessage';

function App() {
  const [gifs, setGifs] = useState([]);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [searchGifs, setSearchGifs] = useState([]);
  const [randomGif, setRandomGif] = useState({});
  const [isToolMessageOpen, setIsToolMessageOpen] = useState(false);
  const [toolMessageText, setToolMessageText] = useState({ text: '' });
  // const isInitialMount = useRef(false);

  React.useEffect(() => {
    Promise.all([api.trending(), api.random()])
      .then(res => {
        setSearchGifs(res[0].data);
        setTrendingGifs(res[0].data);
        setRandomGif(res[1].data);   
        setGifs(res[0].data);     
      })
      .catch(err => {
        console.log(err.status);
      });
  }, []);

  // React.useEffect(() => {
  //   api
  //     .trending()
  //     .then(res => {
  //       console.log(res);
  //       setTrendingGifs(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err.status);
  //     });
  // }, []);

  // React.useEffect(() => {
  //   api
  //     .random()
  //     .then(res => {
  //       console.log('777', res);
  //       setRandomGif(res.data);
  //       console.log('999', randomGif);
  //     })
  //     .catch(err => {
  //       console.log(err.status);
  //     });
  // }, []);
  function handleSearchMenu() {
    setGifs(searchGifs);
  }
  function handleRandomClick() {
    api.random().then((res) => {
      setRandomGif(res.data);
      setGifs(trendingGifs);
      setPage(1);
    })
  }
  function handleClickMenu() {
    api.trending().then((res) => {
      setPage(1);
      setGifs(res.data);
    })
  }
  const [currentPage, setPage] = React.useState(1);
  const perPage = 9;
  function handleClick(evt) {
    setPage(Number(evt.target.id));
  }
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentList = gifs.slice(indexOfFirst, indexOfLast);
  const renderList = currentList.map((page, index) => {
    return <Card  key={index} gif={page}></Card>;
  });
  const pageNumber = [];
  for (let i = 1; i<=Math.ceil(gifs.length / perPage); i++) {
    pageNumber.push(i);
  }

  const renderPageNumber = pageNumber.map(number => {
    return (
      <li className='pagination__page' key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });
  function handleToolMessageOpen() {
    setIsToolMessageOpen(true);
  }


  function handleSearchGifs(word) {
    api.search(word).then(res => {
      console.log(res);
      if (res.data.length === 0) {
        // alert('Результатов не найдено!');
        setToolMessageText({text: 'Результатов не найдено!'});
        handleToolMessageOpen();        
      } else {
        setSearchGifs(res.data);
        setGifs(res.data);
      }
    });
  }

  const closeMessage = () => {    
    setIsToolMessageOpen(false);
  };


  return (
    <div className="root">
      <div className="page">
        <div className="wrap">
          <Header onRandomClick={handleRandomClick} onTrendClick={handleClickMenu} onSearchClick={handleSearchMenu}/>
          <Routes>
            <Route path="/" element={<Search gifs={renderList} onSearch={handleSearchGifs} renderPages={renderPageNumber} />} />
            <Route path="/trends" element={<Trends gifs={renderList} renderPages={renderPageNumber} />} />
            <Route path="/random" element={<Random gif={randomGif} gifs={renderList}/>} />
            <Route path="*" element={<Search to="/" replace />} />
          </Routes>
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
