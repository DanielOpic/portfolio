import React, { useState, useEffect } from 'react';
import './Portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { fetchPublicData } from '../../../api/api'; // Importujemy funkcję z api.js

const Portfolio = () => {
  const [items, setItems] = useState([]); // Domyślnie pusta lista
  const [loading, setLoading] = useState(true); // Flaga ładowania
  const [error, setError] = useState(null); // Flaga błędów
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    limit: 50, // Na stronie 3 elementy
  }); // Stan paginacji

  useEffect(() => {
    // Pobranie danych z API bez potrzeby autoryzacji (publiczne dane)
    const fetchData = () => {
      fetchPublicData(`/portfolio?page=${pagination.currentPage}&limit=${pagination.limit}`)
        .then((data) => {
          if (Array.isArray(data.data)) {
            setItems(data.data); // Ustawienie danych z pola "data"
            setPagination({
              currentPage: data.pagination.current_page,
              totalPages: data.pagination.total_pages,
              totalCount: data.pagination.total_count,
              limit: data.pagination.limit,
            });
          } else {
            throw new Error('Nieprawidłowe dane: Oczekiwano tablicy');
          }
          setLoading(false); // Wyłączenie ładowania
        })
        .catch((err) => {
          setError(err.message); // Ustawienie błędu
          setLoading(false); // Wyłączenie ładowania mimo błędu
        });
    };

    fetchData();
  }, [pagination.currentPage, pagination.limit]); // Ponownie ładować dane przy zmianie strony

  // Funkcje nawigacyjne
  const goToNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));
    }
  };

  const goToPreviousPage = () => {
    if (pagination.currentPage > 1) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }));
    }
  };

  if (loading) {
    return <div className="portfolio">Ładowanie danych...</div>;
  }

  if (error) {
    return <div className="portfolio">Wystąpił błąd: {error}</div>;
  }

  return (



    <div className="portfolio">
      <h2>Moje <span>portfolio</span></h2>
      <ul className="portfolio__list">
        {items.map((item) => (


          <li key={item.id} className="portfolio__list__item">
                        
            <div className="portfolio__list__item__title">{item.name}</div>
            <div className="portfolio__list__item__desc">{item.description}</div>
            <a 
                href={item.link} 
                className="portfolio__list__item__link btn" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                Zobacz projekt
            </a>
          </li>
        ))}
      </ul>

    {/* Paginacja */}
    {pagination.totalPages > 1 && (
          <ul className="mypagination">
              <li 
                className="btn" 
                onClick={goToPreviousPage}
                disabled={pagination.currentPage === 1}
                >
                Poprzednia
              </li>
              <li className="mypagination__no">{pagination.currentPage} / {pagination.totalPages}</li>
              <li 
                className="btn"
                onClick={goToNextPage}
                disabled={pagination.currentPage === pagination.totalPages}
                >
                Następna
              </li>
          </ul>
    )}

    </div>
  );
};

export default Portfolio;