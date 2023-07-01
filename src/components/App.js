import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';
import Footer from './Footer';
import Api from '../utils/api';
function App() {
  return (
    <div className="root">
      <div className="page">
        <div className="wrap">
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/random" element={<Random />} />
            <Route path="*" element={<Search to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
