import React from 'react';
import GifGrid from './GifGrid';
import Pagination from './Pagination';
const Search = ({ onSearch, gifs, renderPages, onDownClick, onUpClick, currentPage, maxPage, isTheme }) => {
  const [search, setSearch] = React.useState({ search: '' });
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSearch(state => ({ ...state, [name]: value }));
  }
  function handleReset() {
    setSearch({ search: '' });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(search.search);
  }

  return (
    <main className="content">
      <div className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className={isTheme? `search__input search__input_light-theme` : `search__input`}
            type="search"
            name="search"
            placeholder="Поле поиска"
            onChange={handleChange}
            value={setSearch.search}
          ></input>
          <button className={isTheme? `search__reset search__button search__reset_light-theme` : `search__reset search__button`} onClick={handleReset} type="reset"></button>
          <button className={isTheme? `search__submit search__button search__submit_light-theme` : `search__submit search__button`} type="submit"></button>
        </form>
      </div>
      <GifGrid gifs={gifs} />
      <Pagination
        renderPages={renderPages}
        onDownClick={onDownClick}
        onUpClick={onUpClick}
        currentPage={currentPage}
        maxPage={maxPage}
        isTheme={isTheme}
      />
    </main>
  );
};

export default Search;
