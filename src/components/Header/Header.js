import './Header.css';
import logo from '../../images/logo.svg';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileButton from '../ProfileButton/ProfileButton';
import Sidebar from '../Sidebar/Sidebar';


function Header({ isLoggedIn }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function closeSidebarHandler() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    // const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen);

    // const handleSignOut = () => {
    //     onSignOut();
    // };

    const headerIsLoggeInTrue = (
        <header className="header header_background-color_black">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo" />
            </Link>
            <nav className='header__navigation'>
                <NavLink className={({isActive}) => isActive ? "header__link header__link_active header__link_margin_right" : "header__link header__link_margin_right" } to="/movies">
                    Фильмы
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "header__link header__link_active" : "header__link" } to="/saved-movies">
                    Сохраненные фильмы
                </NavLink>
            </nav>
            <NavLink className="header__profile-button" to="/profile">
                <ProfileButton />
            </NavLink>
            <button className="header__sidebar-button" onClick={closeSidebarHandler} ></button>
            <Sidebar isOpen={isSidebarOpen} closeSidebarHandler={closeSidebarHandler} />
        </header>
    );

    const headerIsLoggeInFalse = (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo" />
            </Link>

            <nav className='header__links-container'>
                <Link className="header__link-signup" to="/signup">
                    Регистрация
                </Link>
                <Link className="header__link-signin" to="/signin">
                    Войти
                </Link>
            </nav>
        </header>
    );


    return (
        <>
            {isLoggedIn ? headerIsLoggeInTrue : headerIsLoggeInFalse}
        </>

    );
}

export default Header;
