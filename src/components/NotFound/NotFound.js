import React from "react";
import './NotFound.css';
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="not-found">
      <h1 className="not-found__heading">404</h1>
      <h2 className="not-found__subheading">Страница не найдена</h2>
      <button className="not-found__back-link" onClick={goBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFound;
