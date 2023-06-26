import React from "react";
import './ErrorPopup.css';

function ErrorPopup({ isOpen, onClose, errorText }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3 className="popup__heading">
          {errorText}
        </h3>
        <button className="popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ErrorPopup;