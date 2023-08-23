import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';
import '../Header/Header.css';
import SubmitButton from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Register({
  handleRegister,
  isFetching,
  registerError
}) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    handleRegister({ name, email, password });
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__logo" to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <ul className="register__input-list">
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="name">
                Имя
              </label>
              <input
                className="register__input"
                readOnly={isFetching && true}
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                name="name"
                id="name"
                required
                pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
                onChange={handleChange}
                value={values.name ? values.name : ''}
              />
              <span className='register__error-text register__error-text_type_input-error'>
                {errors.name}
              </span>
            </li>
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="email">
                Email
              </label>
              <input
                className="register__input"
                readOnly={isFetching && true}
                type="email"
                placeholder="Email"
                minLength="2"
                maxLength="30"
                name="email"
                id='email'
                required
                pattern='^.+@.+\..+$'
                onChange={handleChange}
                value={values.email ? values.email : ''}
              />
              <span className='register__error-text register__error-text_type_input-error'>
                {errors.email}
              </span>
            </li>
            <li className="register__input-container">
              <label className="register__input-label" htmlFor="password">
                Пароль
              </label>
              <input
                className="register__input"
                readOnly={isFetching && true}
                type="password"
                placeholder="Пароль"
                name="password"
                id="password"
                required
                minLength='8'
                onChange={handleChange}
                value={values.password ? values.password : ''}
              />
              <span className='register__error-text register__error-text_type_input-error'>
                {errors.password}
              </span>
            </li>
          </ul>
          <SubmitButton
            isValid={isValid}
            isFetching={isFetching}
            buttonText={'Зарегистрироваться'}
          />
          {registerError && (<span className='register__error-text register__error-text_type_register-error'>При регистрации произошла ошибка. Проверьте, пожалуйста, поля ввода!</span>)}
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
