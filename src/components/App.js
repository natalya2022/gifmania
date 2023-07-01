import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './../index.css';
import Search from './Search';
import Trends from './Trends';
import Random from './Random';
import Header from './Header';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/random" element={<Random />} />
          <Route path="*" element={<Search to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
