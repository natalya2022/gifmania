import React from 'react';

const Pagination = ({ renderPages }) => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {renderPages}
      </ul>
    </div>
  )
}

export default Pagination;