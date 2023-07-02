import React from 'react';

const Footer = ({ renderPages }) => {
  return (
    <div className="footer">
      <ul className="footer__list">
        {renderPages}
      </ul>
    </div>
  )
}

export default Footer;