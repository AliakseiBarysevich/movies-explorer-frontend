import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';
import '../Header/Header.css';
import Button from "../Button/Button";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form className="register__form">
          <ul className="register__input-list">
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="name">
                Имя
              </label>
              <input
                className="register__input"
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                name="name"
                id="name"
                required
              />
            </li>
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="email">
                Email
              </label>
              <input
                className="register__input"
                type="email"
                placeholder="Email"
                minLength="2"
                maxLength="30"
                name="email"
                id='email'
                required
              />
            </li>
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="password">
                Пароль
              </label>
              <input
                className="register__input"
                type="password"
                placeholder="Пароль"
                name="password"
                id="password"
                required
              />
            </li>
          </ul>

          {/* <button className="register__submit-button"></button> */}
          <Button>Зарегистрироваться</Button>
        </form>
        <p className="register__paragraph">
          Уже зарегистрированы?{" "}
          <Link className="register__paragraph-link" to="/signin">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
