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
    },
    {
        id: 4,
        title: "Projekt 4",
        image: '/img/test.jpg',
        link: "https://linkdoprojktu2.com",
        dateFrom: "2021-07",
        dateTo: "2021-12",
        description: "Opis projektu 4"
    },
    {
        id: 5,
        title: "Projekt 5",
        image: '/img/test.jpg',
        link: "https://linkdoprojktu3.com",
        dateFrom: "2023-01",
        dateTo: "current",
        description: "Opis projektu 5"
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>Moje <span>portfolio</span></h2>
            <ul className="portfolio__list">
                {projects.map((project) => (
                    <li key={project.id} className="portfolio__list__item">
                        <img src={project.image} alt={project.title} className="portfolio__list__item__image" />
                        <div className="portfolio__list__item__title">{project.title}</div>
                        <div className="portfolio__list__item__link">Zobacz projekt</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
