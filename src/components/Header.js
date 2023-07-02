import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from './../images/logo22.png';

const Header = ({ onTrendClick, onRandomClick }) => {
  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      <div className="header__navbar">        
        <NavLink to="/" className="header__link">
          Поиск
        </NavLink>
        <NavLink to="/trends" className="header__link">
          Тренды
        </NavLink>
        <NavLink to="/random" className="header__link">
          Случайный гиф
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
