import React from 'react';

const Pagination = ({ renderPages, onDownClick, onUpClick, currentPage, maxPage }) => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage === 1 ? (
          <li className="pagination__page disabled">Назад</li>
        ) : (
          <li className="pagination__page" onClick={onDownClick}>
            Назад
          </li>
        )}
        {renderPages}
        {currentPage === maxPage ? (
          <li className="pagination__page disabled">Вперед</li>
        ) : (
          <li className="pagination__page" onClick={onUpClick}>
            Вперед
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
