import "./AboutMe.css";
import "../AboutProject/AboutProject.css";
import avatar from '../../images/avatar.jpg';
import React from "react";


function AboutMe() {

    return (
        <section className="about-me">
            <h2 className="about-project__heading">Студент</h2>
            <div className="about-me__info-container">
                <h3 className="about-me__name">Алексей</h3>
                <p className="about-me__short-info">Фронтенд-разработчик, 28 лет</p>
                <p className="about-me__full-info">Я родился в Слониме (Беларусь), живу в Минске, закончил переводческий факультет МГЛУ. Я люблю кататься на велосипеде, комментирую футбол. Недавно начал кодить. С 2022 года работаю в Галерее FARBA.</p>
                <a className="about-me__github-link" href="https://github.com/AliakseiBarysevich" target="_blank" rel="noreferrer">GitHub</a>
                <img className="about-me__image" src={avatar} alt="Тут должен быть фэйс мистера Алёши"></img>
            </div>
        </section>
    );
}

export default AboutMe;
