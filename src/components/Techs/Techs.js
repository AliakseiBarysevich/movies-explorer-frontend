import "./Techs.css";
import "../AboutProject/AboutProject.css";
import React from "react";


function Techs() {

    return (
        <section className="techs">
            <h2 className="about-project__heading">Технологии</h2>
            <div className="techs__content-container">
                <h3 className="techs__title">7 технологий</h3>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__techs-container">
                    <p className="techs__techs-item">HTML</p>
                    <p className="techs__techs-item">CSS</p>
                    <p className="techs__techs-item">JS</p>
                    <p className="techs__techs-item">React</p>
                    <p className="techs__techs-item">GIT</p>
                    <p className="techs__techs-item">Express.js</p>
                    <p className="techs__techs-item">MongoDB</p>
                </div>
            </div>

        </section>
    );
}

export default Techs;
