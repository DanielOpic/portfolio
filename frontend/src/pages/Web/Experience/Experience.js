import React, { useState, useEffect } from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { fetchPublicData } from '../../../api/api'; // Importujemy funkcję z api.js

const Experience = () => {
    const [items, setItems] = useState([]); // Domyślnie pusta lista
    const [loading, setLoading] = useState(true); // Flaga ładowania
    const [error, setError] = useState(null); // Flaga błędów

    useEffect(() => {
        // Pobranie danych z API bez potrzeby autoryzacji (publiczne dane)
        fetchPublicData('/experience') // Wywołanie publicznej funkcji z api.js
          .then(data => {
            setItems(data); // Ustawienie pobranych danych
            setLoading(false); // Wyłączenie ładowania
          })
          .catch(err => {
            setError(err.message);
            setLoading(false); // Wyłączenie ładowania mimo błędu
          });
    }, []); // Tylko raz przy montowaniu komponentu

    if (loading) {
        return <div className="experience">Ładowanie danych...</div>;
    }

    if (error) {
        return <div className="experience">Wystąpił błąd: {error}</div>;
    }

    return (
        <div className="experience">
            <h2>Moje <span>doświadczenie</span></h2>
            <ul className="experience__list">
                {items.map((item) => (
                    <li key={item.id} className="experience__list__item">
                        <h3>{item.name} - {item.company}</h3>

                        <p className="experience__list__item__dates">
                            <span className="ico"><FontAwesomeIcon icon={faCalendarDays} /></span> 
                            <span className="from">{item.fromdate}</span>
                            <span className="sep"> - </span>
                            {item.current == 1 ? (
                                <span className="to current">Obecnie</span>
                            ) : (
                                <span className="to">{item.todate}</span>
                            )}
                        </p>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
