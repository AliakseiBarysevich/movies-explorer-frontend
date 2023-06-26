import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {

  return (
    <div className='filter-checkbox'>
        <label className="filter-checkbox__switch">
            <input className='filter-checkbox__checkbox' type="checkbox"></input>
            <span className="filter-checkbox__slider round"></span>
        </label>
        <span className='filter-checkbox__name'>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
