import React from 'react';

const Pagination = ({ renderPages, onDownClick, onUpClick, currentPage, maxPage, isTheme }) => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage === 1 ? (
          <li className={isTheme? `pagination__page pagination__page_light-theme disabled` : `pagination__page disabled`}>Назад</li>
        ) : (
          <li className={isTheme? `pagination__page pagination__page_light-theme` : `pagination__page`} onClick={onDownClick}>
            Назад
          </li>
        )}
        {renderPages}
        {currentPage === maxPage ? (
          <li className={isTheme? `pagination__page pagination__page_light-theme disabled` : `pagination__page disabled`}>Вперед</li>
        ) : (
          <li className={isTheme? `pagination__page pagination__page_light-theme` : `pagination__page`} onClick={onUpClick}>
            Вперед
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
