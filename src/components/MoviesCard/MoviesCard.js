import React from "react";
import './MoviesCard.css'

function MoviesCard({ movieLink, movieName, movieLength, isSaved }) {

  return (
    <article className="movies-card">
      <div className="movies-card__card-image" style={{ backgroundImage: `url(${movieLink})` }}></div>
      <div className="movies-card__movie-info-container">
        <p className="movies-card__movie-name">{movieName}</p>
        <p className="movies-card__movie-length">{movieLength}</p>
      </div>
      <button className={isSaved ? "movies-card__save-button movies-card__save-button_saved" : "movies-card__save-button"}></button>
    </article>
  );
}

export default MoviesCard;