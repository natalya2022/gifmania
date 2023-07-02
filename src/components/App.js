import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';
import Footer from './Footer';
// import Api from '../utils/api';
import { api } from '../utils/api';
import ToolMessage from './ToolMessage';

function App() {
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
          <Header />
          <Routes>
            <Route path="/" element={<Search gifs={searchGifs} onSearch={handleSearchGifs} />} />
            <Route path="/trends" element={<Trends gifs={trendingGifs} />} />
            <Route path="/random" element={<Random gif={randomGif} gifs={trendingGifs}/>} />
            <Route path="*" element={<Search to="/" replace />} />
          </Routes>
          <Footer />
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
