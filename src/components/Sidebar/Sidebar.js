import React from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./Sidebar.css";
import "../Header/Header.css";

function Sidebar({ isOpen, closeSidebarHandler }) {
    return (
        <div className={`sidebar__overlay ${isOpen ? "sidebar__overlay_visible" : ""}`}>
            <div
                className={`sidebar ${isOpen ? "sidebar_visible" : "sidebar_hidden"}`}
            >
                <nav className="sidebar__links-container">
                    <NavLink
                        className={({ isActive }) => isActive ? "sidebar__link sidebar__link_active" : "sidebar__link"}
                        to="/"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "sidebar__link sidebar__link_active" : "sidebar__link"}
                        to="/movies"
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "sidebar__link sidebar__link_active" : "sidebar__link"}
                        to="/saved-movies"
                    >
                        Сохранённые фильмы
                    </NavLink>
                </nav>
                <NavLink className="header__profile-button" to="/profile">
                    <ProfileButton />
                </NavLink>
                <button className="sidebar__close-button" onClick={closeSidebarHandler} ></button>
            </div>
        </div>
    );
};

export default Sidebar;