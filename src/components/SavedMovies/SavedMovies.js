import React, { useCallback } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies({
  movies,
  convertDuration,
  setSavedBfMoviesSearchQuery,
  savedBfMoviesIsShort,
  setSavedBfMoviesIsShort,
  savedBfMoviesInputValue,
  setSavedBfMoviesInutValue,
  handleDeleteMovieClick
}) {

  const handleSearch = useCallback(
    (input) => {
      setSavedBfMoviesSearchQuery(input);
    },
    [setSavedBfMoviesSearchQuery]
  );

  return (
    <section className="saved-movies">
      <SearchForm 
          moviesInputValue={savedBfMoviesInputValue}
          // moviesInputValue={''}
          setMoviesInputValue={setSavedBfMoviesInutValue}
          moviesIsShort={savedBfMoviesIsShort}
          // moviesIsShort={false}
          setMoviesIsShort={setSavedBfMoviesIsShort}
          handleSearch={handleSearch}
      />
      <MoviesCardList
        movies={movies}
        convertDuration={convertDuration}
        handleDeleteMovieClick={handleDeleteMovieClick}
      />
    </section>
  );
}

export default SavedMovies;