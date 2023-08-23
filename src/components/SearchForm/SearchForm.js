import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  moviesInputValue,
  setMoviesInputValue,
  moviesIsShort,
  setMoviesIsShort,
  handleSearch
}) {

  const [emptySearchQuery, setEmptySearchQuery] = useState(false);

    const handleSearchInput = (e) => {
      setMoviesInputValue(e.target.value);
    };
  
    const handleMovieSearch = (e) => {
      e.preventDefault();
      if (!moviesInputValue) {
        setEmptySearchQuery(true);
      } else {
        setEmptySearchQuery(false);
        handleSearch(moviesInputValue);
      }
    };

  return (
    <section className="search-form">
      <form className="search-form__form-container" onSubmit={handleMovieSearch}>
        <div className="search-form__form">
          <div className="search-form__magnifier-icon"></div>
          <input
            className="search-form__input"
            placeholder="Фильм"
            onChange={handleSearchInput}
            value={moviesInputValue}
            required></input>
          {emptySearchQuery && (
            <div className='search-form__empty-input-error'>
              <p className='search-form__empty-input-error-text'>
                Нужно ввести ключевое слово
              </p>
            </div>
          )}
          <button className="search-form__submit-button" onClick={handleMovieSearch}></button>
          <div className="search-form__vertical-line"></div>
        </div>
        <FilterCheckbox
          bfMoviesIsShort={moviesIsShort}
          setBfMoviesIsShort={setMoviesIsShort}
        />
      </form>
    </section>
  );
}

export default SearchForm;