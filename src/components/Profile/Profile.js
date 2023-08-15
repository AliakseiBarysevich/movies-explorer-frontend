import React, { useEffect, useContext } from "react";
import './Profile.css';
import '../Register/Register.css';
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import CurrentUserContext from "../../context/CurrentUserContext";
import '../SubmitButton/SubmitButton.css';
import Popup from "../Popup/Popup";

function Profile({
  handleSignOut,
  handleUpdateProfile,
  isFetching,
  isPopupOpen,
  handleClosePopup,
  isProfileUpdateSuccessful
}) {

  const { values, errors, isValid, handleChange, setValues } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;
    handleUpdateProfile({ name, email });
  }

  const isSubmitButtonAble =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

  return (
    <section className="profile">
      {isProfileUpdateSuccessful && <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        popupText={`Вы успешно обновили данные профиля.`}
      />}
      <h1 className="profile__greeting">Привет, {currentUser.name}</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <ul className="profile__input-list">
          <li className="profile__input-item">
            <label className="profile__form-label" htmlFor="profile__name">Имя</label>
            <input
              className='profile__form-input'
              placeholder={currentUser.name}
              minLength="2"
              maxLength="30"
              name="name"
              id="profile__name"
              required
              pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
              onChange={handleChange}
              value={values.name ? values.name : ''}
            ></input>
            <span className='register__error-text profile__error-text'>
              {errors.name}
            </span>
          </li>
          <div className="profile__dividing-line"></div>
          <li className="profile__input-item">
            <label className="profile__form-label" htmlFor="profile__email">E-mail</label>
            <input
              className='profile__form-input'
              placeholder={currentUser.email}
              minLength="2"
              maxLength="30"
              name="email"
              id='profile__email'
              required
              pattern='^.+@.+\..+$'
              onChange={handleChange}
              value={values.email ? values.email : ''}
            ></input>
            <span className='register__error-text profile__error-text'>
              {errors.email}
            </span>
          </li>
        </ul>
      </form>
      <div className="profile__button-container">
        <button
          className={
            !isSubmitButtonAble || isFetching
              ? 'submit-button submit-button_disabled'
              : 'submit-button'
          }
          disabled={!isSubmitButtonAble || isFetching ? true : false}
          onClick={handleSubmit}>
          Редактировать
        </button>
        <Link className="profile__signout-button" onClick={handleSignOut} to='/'>
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
