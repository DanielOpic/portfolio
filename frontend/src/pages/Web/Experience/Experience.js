import React from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Firma X",
        dateFrom: "styczeń 2020",
        dateTo: "current", // Oznaczenie, że jest w trakcie
        description: "Tworzenie dynamicznych aplikacji webowych w technologii React.js."
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Firma Y",
        dateFrom: "lipiec 2018",
        dateTo: "grudzień 2019",
        description: "Rozwój aplikacji backendowych z wykorzystaniem CakePHP oraz MySQL."
    },
    {
        id: 3,
        title: "Junior Web Developer",
        company: "Firma Z",
        dateFrom: "wrzesień 2016",
        dateTo: "czerwiec 2018",
        description: "Wsparcie w tworzeniu stron internetowych oraz wdrażanie funkcjonalności w jQuery."
    }
];

const Experience = () => {
    return (
        <div className="experience">
            <h2>Moje <span>doświadczenie</span></h2>
            <ul className="experience__list">
                {experiences.map((exp) => (
                    <li key={exp.id} className="experience__list__item">
                        <h3>{exp.title} - {exp.company}</h3>

                        <p className="experience__list__item__dates">
                            <span className="ico"><FontAwesomeIcon icon={faCalendarDays} /></span> 
                            <span className="from">{exp.dateFrom}</span>
                            <span className="sep"> - </span>
                            {exp.dateTo === 'current' ? (
                                <span className="to current">Obecnie</span>
                            ) : (
                                <span className="to">{exp.dateTo}</span>
                            )}
                        </p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Experience;
