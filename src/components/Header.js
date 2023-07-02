import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './../images/gif-svgrepo-com.svg';

const Header = ({ onTrendClick, onRandomClick }) => {
  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      <div className="header__navbar">
        <Link to="/" className="header__link">
          Поиск
        </Link>
        <Link to="/trends" className="header__link" onClick={onTrendClick}>
          Тренды
        </Link>
        <Link to="/random" className="header__link" onClick={onRandomClick}>
          Случайный гиф
        </Link>
      </div>
    </header>
  );
};

export default Header;
