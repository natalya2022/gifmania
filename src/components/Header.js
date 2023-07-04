import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogoLight from './../images/logo_darkblue.png';
import headerLogoDark from './../images/logo22.png';

const Header = ({ onTrendClick, onRandomClick, onSearchClick, onChangeTheme, isTheme }) => {
  return (
    <header className="header">
      <label
        className={isTheme ? `button-theme button-theme_active` : `button-theme`}
        onClick={onChangeTheme}
      />
      <img
        src={isTheme ? `${headerLogoLight}` : `${headerLogoDark}`}
        alt="Логотип"
        className="header__logo"
      />
      <div className={isTheme ? `header__navbar header__navbar_light-theme` : `header__navbar`}>
        <NavLink
          to="/"
          className={isTheme ? `header__link header__link_light-theme` : `header__link`}
          onClick={onSearchClick}
        >
          Поиск
        </NavLink>
        <NavLink
          to="/trends"
          className={isTheme ? `header__link header__link_light-theme` : `header__link`}
          onClick={onTrendClick}
        >
          Тренды
        </NavLink>
        <NavLink
          to="/random"
          className={isTheme ? `header__link header__link_light-theme` : `header__link`}
          onClick={onRandomClick}
        >
          Случайный гиф
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
