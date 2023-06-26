import React from "react";
import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div className="not-found">
      <h1 className="not-found__heading">404</h1>
      <h2 className="not-found__subheading">Страница не найдена</h2>
      <Link className="not-found__back-link" to="/">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
