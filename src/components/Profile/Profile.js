import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";

function Profile({ username, useremail, handleEdit, handleSignOut }) {

  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, {username}</h1>
      <form className="profile__form">
        <ul className="profile__input-list">
          <li className="profile__input-item">
            <label className="profile__form-label">Имя</label>
            <input className='profile__form-input' placeholder={username}></input>
          </li>
          <div className="profile__dividing-line"></div>
          <li className="profile__input-item">
            <label className="profile__form-label">E-mail</label>
            <input className='profile__form-input' placeholder={useremail}></input>
          </li>
        </ul>
      </form>
      <div className="profile__button-container">
        <button className="profile__button profile__button_type_edit-button" onClick={handleEdit}>
          Редактировать
        </button>
        <Link className="profile__button profile__button_type_signout-button" onClick={handleSignOut} to='/'>
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
