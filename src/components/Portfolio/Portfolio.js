import "./Portfolio.css";
import "../AboutProject/AboutProject.css";
import React from "react";


function Portfolio() {

    return (
        <section className="portfolio">
            <h3 className="portfolio__subheading">Портфолио</h3>
            <nav className="portfolio__links-container">
                <ul className="portfolio__links-list">
                    <li className="portfolio__links-list-item">
                        <a className="portfolio__link" href="https://github.com/AliakseiBarysevich/russian-travel" target="_blank" rel="noreferrer">
                            <p className="portfolio__link-text">Статичный сайт</p>
                            <div className="portfolio__link-image"></div>
                        </a>
                    </li>
                    <li className="portfolio__links-list-item">
                    <a className="portfolio__link" href="https://github.com/AliakseiBarysevich/russian-travel" target="_blank" rel="noreferrer">
                            <p className="portfolio__link-text">Адаптивный сайт</p>
                            <div className="portfolio__link-image"></div>
                        </a>
                    </li>
                    <li className="portfolio__links-list-item">
                    <a className="portfolio__link" href="https://github.com/AliakseiBarysevich/russian-travel" target="_blank" rel="noreferrer">
                            <p className="portfolio__link-text">Одностраничное приложение</p>
                            <div className="portfolio__link-image"></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Portfolio;
