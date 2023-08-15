import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
    movies,
    savedMovies,
    convertDuration,
    handleSaveMovieClick,
    handleDeleteMovieClick,
}) {

    return (

        <section className="movie-cards">
            <ul className='movies-cards__list'>
                {movies.length === 0 ? (
                    <p className='movies-cards__empty-list-text'>Ничего не найдено</p>
                ) : (
                    movies.map((movie) => (
                        <MoviesCard
                            movie={movie}
                            savedMovies={savedMovies}
                            key={movie.id ?? movie.movieId}
                            convertDuration={convertDuration}
                            handleSaveMovieClick={handleSaveMovieClick}
                            handleDeleteMovieClick={handleDeleteMovieClick}
                        />
                    ))
                )}
            </ul>
        </section>
    );
}

export default MoviesCardList;
