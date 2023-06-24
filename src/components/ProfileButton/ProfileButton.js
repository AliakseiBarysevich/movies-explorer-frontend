import './ProfileButton.css';
import React from "react";

function ProfileButton() {
    return (
        <button className="profile-button">
            <div className='profile-button__icon'></div>
            <span className='profile-button__button-text'>Аккаунт</span>
        </button>
    );
}

export default ProfileButton;
