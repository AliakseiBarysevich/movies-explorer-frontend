import React from "react";
import './Popup.css';

function Popup({
  isOpen,
  onClose,
  popupText
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3 className="popup__heading">
          {popupText}
        </h3>
        <button className="popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default Popup;