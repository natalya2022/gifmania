import React from 'react';

const Search = () => {
  const [search, setSearch] = React.useState({search: ""});
  function handleChange(evt) {
    const {name, value} = evt.target;
    setSearch((state) => ({...state, [name]: value}));
    console.log(search);
  }
  function handleReset() {
    setSearch({search: ""});
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(search);
  }
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input className="search__input" type="search" name="search" placeholder="Поле поиска" onChange={handleChange} value={setSearch.search}></input>
        <button className="search__reset" onClick={handleReset} type="reset"></button>
        <button className="search__submit" type="submit"></button>

      </form>
    </div>
  )
}

export default Search;