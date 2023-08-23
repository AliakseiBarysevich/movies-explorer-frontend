import React from "react";
import './MoviesCard.css'
import { useLocation } from "react-router-dom";

function MoviesCard({
  movie,
  savedMovies,
  convertDuration,
  handleSaveMovieClick,
  handleDeleteMovieClick
}) {
  let { pathname } = useLocation();

  const isSaved = savedMovies
    ? savedMovies.some((item) => item.movieId === movie.id)
    : false;

  const onSaveMovieClick = () => {
    handleSaveMovieClick(movie);
  };

  const onDeleteMovieClick = () => {
    handleDeleteMovieClick(movie);
  };

  return (
    <li className="movies-card">
      <article className="movies-card__card">
        <a
          className='movies-cards__trailer-link'
          href={movie.trailerLink}
          target='_blank'
          rel='noreferrer'
        >
          {pathname === '/saved-movies' ?
          (<div className="movies-card__card-image" style={{ backgroundImage: `url(${movie.image})` }}></div>) :
          (<div className="movies-card__card-image" style={{ backgroundImage: `url(https://api.nomoreparties.co${movie.image.url})` }}></div>)}
        </a>
        <div className="movies-card__movie-info-container">
          <p className="movies-card__movie-name">{movie.nameRU}</p>
          <p className="movies-card__movie-length">{convertDuration(movie.duration)}</p>
        </div>
        {pathname === '/saved-movies' ?
          (<button
            className="movies-card__delete-button button"
            onClick={onDeleteMovieClick}>
          </button>) :
          (<button
            className={
              isSaved ?
                "movies-card__save-button movies-card__save-button_saved button" :
                "movies-card__save-button button"}
            onClick={onSaveMovieClick}>
          </button>)}
      </article>
    </li>

  );
}

export default MoviesCard;