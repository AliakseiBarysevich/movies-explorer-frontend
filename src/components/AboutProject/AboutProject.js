import './AboutProject.css';
import React from "react";

function AboutProject() {

    return (
        <section className="about-project">
            <h2 className="about-project__heading">О проекте</h2>
            <div className="about-project__description">
                <p className="about-project__description-title about-project__stages-title">Дипломный проект включал 5 этапов</p>
                <p className="about-project__description-title about-project__weeks-title">На выполнение диплома ушло 5 недель</p>
                <p className="about-project__description-subtitle about-project__stages-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="about-project__description-subtitle about-project__weeks-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about-project__timeline-container">
                <p className="about-project__timeline-cell about-project__timeline-cell_background_green">1 неделя</p>
                <p className="about-project__timeline-cell about-project__timeline-cell_background_grey">4 недели</p>
                <p className="about-project__timeline-cell about-project__timeline-cell_background_black">Back-end</p>
                <p className="about-project__timeline-cell about-project__timeline-cell_background_black">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;
