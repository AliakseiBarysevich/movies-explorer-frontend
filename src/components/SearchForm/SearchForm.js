import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {

  return (
    <section className="search-form">
      <form className="search-form__form-container">
        <div className="search-form__form">
          <div className="search-form__magnifier-icon"></div>
          <input className="search-form__input" placeholder="Фильм"></input>
          <button className="search-form__submit-button"></button>
          <div className="search-form__vertical-line"></div>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;