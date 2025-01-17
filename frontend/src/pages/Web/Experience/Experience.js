import React, { useState, useEffect } from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { fetchPublicData } from '../../../api/api'; // Importujemy funkcję z api.js

const Experience = () => {
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
      fetchPublicData(`/experience?page=${pagination.currentPage}&limit=${pagination.limit}`)
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
    return <div className="experience">Ładowanie danych...</div>;
  }

  if (error) {
    return <div className="experience">Wystąpił błąd: {error}</div>;
  }

  return (
    <div className="experience">
      <h2>
        Moje <span>doświadczenie</span>
      </h2>
      <ul className="experience__list">
        {items.map((item) => (
          <li key={item.id} className="experience__list__item">
            <h3>{item.name} - {item.company}</h3>
            <p className="experience__list__item__dates">
              <span className="ico"><FontAwesomeIcon icon={faCalendarDays} /></span>
              <span className="from">{item.fromdate}</span>
              <span className="sep"> - </span>
              {item.current === 1 ? (
                <span className="to current">Obecnie</span>
              ) : (
                <span className="to">{item.todate}</span>
              )}
            </p>
            <p>{item.description}</p>
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

export default Experience;
