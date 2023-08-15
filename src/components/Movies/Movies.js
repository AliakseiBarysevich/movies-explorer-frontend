import React, { useCallback } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import Preloader from '../Preloader/Preloader';
import Popup from "../Popup/Popup";

function Movies({
  isLoadingBfMovies,
  bfMovies,
  savedBfMovies,
  convertDuration,
  handleSaveMovieClick,
  handleDeleteMovieClick,
  searchError,
  isPopupOpen,
  handleClosePopup,
  setBfMoviesInputValue,
  bfMoviesInputValue,
  setBfMoviesIsShort,
  bfMoviesIsShort,
  setBfMoviesSearchQuery,
  windowWidth,
  initialCardsQuantity,
  setInitialCardsQuantity
}) {

  const handleMoreButtonClick = () => {
    if (windowWidth > 768) {
      setInitialCardsQuantity(initialCardsQuantity + 3);
      console.log(initialCardsQuantity);
    } else {
      setInitialCardsQuantity(initialCardsQuantity + 2);
    }
  };

  const handleSearch = useCallback(
    (input) => {
      setBfMoviesSearchQuery(input);
    },
    [setBfMoviesSearchQuery]
  );

  return (
    <section className="movies">
      <SearchForm
        moviesInputValue={bfMoviesInputValue}
        setMoviesInputValue={setBfMoviesInputValue}
        moviesIsShort={bfMoviesIsShort}
        setMoviesIsShort={setBfMoviesIsShort}
        handleSearch={handleSearch}
      />
      {searchError && <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        errorText={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'}
      />}
      {isLoadingBfMovies ?
        <Preloader /> :
        <MoviesCardList
          movies={bfMovies.slice(0, initialCardsQuantity)}
          savedMovies={savedBfMovies}
          convertDuration={convertDuration}
          handleSaveMovieClick={handleSaveMovieClick}
          handleDeleteMovieClick={handleDeleteMovieClick}
          windowWidth={windowWidth}
        />}
      {bfMovies.length > initialCardsQuantity ? <More handleClick={handleMoreButtonClick} /> : ''}
    </section>
  );
}

export default Movies;
