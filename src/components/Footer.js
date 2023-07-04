import React from 'react';

const Footer = ({ isTheme }) => {
  return (
    <footer className="footer">
      <p className={isTheme? `footer__copyright footer__copyright_light-theme` : `footer__copyright`}>© {new Date().getFullYear()} GIF-mania</p>
    </footer>
  );
};

export default Footer;