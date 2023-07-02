import React from 'react';

const Footer = ({ pageNumber }) => {

  return (
    <div className="footer">
      <ul className="footer__list">
        {pageNumber}
      </ul>
    </div>
  )
}

export default Footer;