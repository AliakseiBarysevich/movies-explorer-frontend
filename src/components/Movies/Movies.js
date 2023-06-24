import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function Movies() {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <More />
    </section>
  );
}

export default Movies;
