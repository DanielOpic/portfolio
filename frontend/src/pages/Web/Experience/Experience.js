import React from 'react';
import './Experience.scss';

const experiences = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Firma X",
        dateFrom: "2020-01",
        dateTo: "2022-06",
        description: "Tworzenie dynamicznych aplikacji webowych w technologii React.js."
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Firma Y",
        dateFrom: "2018-05",
        dateTo: "2019-12",
        description: "Rozwój aplikacji backendowych z wykorzystaniem CakePHP oraz MySQL."
    },
    {
        id: 3,
        title: "Junior Web Developer",
        company: "Firma Z",
        dateFrom: "2016-09",
        dateTo: "current", // Oznaczenie, że jest w trakcie
        description: "Wsparcie w tworzeniu stron internetowych oraz wdrażanie funkcjonalności w jQuery."
    }
];

const Experience = () => {
    return (
        <div className="experience">
            <h1>Moje Doświadczenie</h1>
            <ul className="experience__list">
                {experiences.map((exp) => (
                    <li key={exp.id} className="experience__item">
                        <h2>{exp.title}</h2>
                        <h3>{exp.company}</h3>
                        <p className="experience__dates">
                            {exp.dateFrom} - {exp.dateTo === 'current' ? 'Obecnie' : exp.dateTo}
                        </p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Experience;
