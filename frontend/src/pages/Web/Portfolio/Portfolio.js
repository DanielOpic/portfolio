import React from 'react';
import './Portfolio.scss';


const projects = [
    {
        id: 1,
        title: "Projekt 1",
        image: '/img/test.jpg',
        link: "https://linkdoprojktu1.com",
        dateFrom: "2022-01",
        dateTo: "2022-05",
        description: "Opis projektu 1"
    },
    {
        id: 2,
        title: "Projekt 2",
        image: '/img/test.jpg',
        link: "https://linkdoprojktu2.com",
        dateFrom: "2021-07",
        dateTo: "2021-12",
        description: "Opis projektu 2"
    },
    {
        id: 3,
        title: "Projekt 3",
        image: '/img/test.jpg',
        link: "https://linkdoprojktu3.com",
        dateFrom: "2023-01",
        dateTo: "current",
        description: "Opis projektu 3"
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Moje Portfolio</h1>
            <ul className="portfolio__list">
                {projects.map((project) => (
                    <li key={project.id} className="portfolio__item">
                        <img src={project.image} alt={project.title} className="portfolio__image" />
                        <h2>{project.title}</h2>
                        <p className="portfolio__dates">
                            {project.dateFrom} - {project.dateTo === 'current' ? 'Obecnie' : project.dateTo}
                        </p>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Zobacz projekt</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
