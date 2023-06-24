import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';
import '../Register/Register.css';
import '../Header/Header.css';
import Button from "../Button/Button";

function Login() {
  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__logo" to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <h1 className="register__heading">Рады видеть!</h1>
        <form className="register__form">
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
              />
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
              />
            </li>
          </ul>
          <Button>Войти</Button>
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
