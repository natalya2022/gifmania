import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from './../images/logo22.png';

const Header = ({ onTrendClick, onRandomClick, onSearchClick, onChangeTheme, isTheme }) => {
  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      <div className={isTheme? `header__navbar header__navbar_light-theme` : `header__navbar`}>        
        <NavLink to="/" className={isTheme? `header__link header__link_light-theme` : `header__link`} onClick={onSearchClick}>
          Поиск
        </NavLink>
        <NavLink to="/trends" className={isTheme? `header__link header__link_light-theme` : `header__link`} onClick={onTrendClick}>
          Тренды
        </NavLink>
        <NavLink to="/random" className={isTheme? `header__link header__link_light-theme` : `header__link`} onClick={onRandomClick}>
          Случайный гиф
        </NavLink>
        <label className={isTheme? `button-theme button-theme_active` : `button-theme`} onClick={onChangeTheme}/>
      </div>
        
    </header>
  );
};

export default Header;
