import React from 'react';

const Pagination = ({ renderPages, onDownClick, onUpClick }) => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__page" onClick={onDownClick}>Назад</li>
        {renderPages}
        <li className="pagination__page" onClick={onUpClick}>Вперед</li>
      </ul>
    </div>
  )
}

export default Pagination;