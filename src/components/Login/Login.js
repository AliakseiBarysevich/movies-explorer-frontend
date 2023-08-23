import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';
import '../Register/Register.css';
import '../Header/Header.css';
import SubmitButton from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import Popup from "../Popup/Popup";

function Login({
  handleLogin,
  isFetching,
  setIsSignInSuccessful,
  isPopupOpen,
  handleClosePopup
}) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    handleLogin({ email, password });
  }


  return (
    <section className="register">
      {!setIsSignInSuccessful &&
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          popupText={'При входе произошла ошибка. Проверьте, пожалуйста, введённые вами данные!'}
        />}
      <div className="register__container">
        <Link className="register__logo" to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <h1 className="register__heading">Рады видеть!</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <ul className="register__input-list">
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="email">
                Email
              </label>
              <input
                className="register__input"
                id="email"
                type="email"
                placeholder="Email"
                minLength="2"
                maxLength="30"
                name="email"
                required
                pattern='^.+@.+\..+$'
                onChange={handleChange}
                value={values.email ? values.email : ''}
              />
              <span className='register__error-text register__error-text register__error-text_type_input-error'>
                {errors.email}
              </span>
            </li>
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="password">
                Пароль
              </label>
              <input
                className="register__input"
                id="password"
                type="password"
                placeholder="Пароль"
                name="password"
                required
                minLength='8'
                onChange={handleChange}
                value={values.password ? values.password : ''}
              />
              <span className='register__error-text register__error-text register__error-text_type_input-error'>
                {errors.password}
              </span>
            </li>
          </ul>
          <SubmitButton isValid={isValid} isFetching={isFetching} buttonText={'Войти'} />
        </form>
        <p className="register__paragraph">
          Ещё не зарегистрированы?{" "}
          <Link className="register__paragraph-link" to="/signup">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;