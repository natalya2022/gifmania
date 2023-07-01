import React from 'react';
import GifGrid from './GifGrid';
const Search = ({ gifs, onSearch }) => {
  const [search, setSearch] = React.useState({search: ""});
  function handleChange(evt) {
    const {name, value} = evt.target;
    setSearch((state) => ({...state, [name]: value}));
  }
  function handleReset() {
    setSearch({search: ""});
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(search.search);
  }
  return (
    <>
      <div className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" type="search" name="search" placeholder="Поле поиска" onChange={handleChange} value={setSearch.search}></input>
          <button className="search__reset" onClick={handleReset} type="reset"></button>
          <button className="search__submit" type="submit"></button>
        </form>
      </div>
      <GifGrid gifs={gifs}/>
    </>
  )
}

export default Search;