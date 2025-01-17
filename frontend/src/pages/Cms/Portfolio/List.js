import React, { useState, useEffect } from 'react';
import { fetchPublicData, fetchPrivateData } from '../../../api/api'; 

const List = ({ onChangeViewMode }) => {
  const [items, setItems] = useState([]); // Domyślnie pusta tablica
  const [loading, setLoading] = useState(true); // Flaga ładowania
  const [error, setError] = useState(null); // Flaga błędów
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    limit: 50
  }); // Stan paginacji

  useEffect(() => {
    // Pobranie danych z API bez potrzeby autoryzacji (publiczne dane)
    const fetchData = () => {
      fetchPublicData(`/portfolio?page=${pagination.currentPage}&limit=${pagination.limit}`)
        .then(data => {
          if (Array.isArray(data.data)) {
            setItems(data.data); // Ustawienie danych z pola "data"
            setPagination({
              currentPage: data.pagination.current_page,
              totalPages: data.pagination.total_pages,
              totalCount: data.pagination.total_count,
              limit: data.pagination.limit
            });
          } else {
            throw new Error('Nieprawidłowe dane: Oczekiwano tablicy');
          }
          setLoading(false); // Wyłączenie ładowania
        })
        .catch(err => {
          setError(err.message); // Ustawienie błędu
          setLoading(false); // Wyłączenie ładowania mimo błędu
        });
    };

    fetchData();
  }, [pagination.currentPage, pagination.limit]); // Ponownie ładować dane przy zmianie strony

  const goToNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
    }
  };

  const goToPreviousPage = () => {
    if (pagination.currentPage > 1) {
      setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }));
    }
  };

  if (loading) {
    return <div className="portfolio">Ładowanie danych...</div>;
  }

  if (error) {
    return <div className="portfolio">Wystąpił błąd: {error}</div>;
  }

  // Funkcja do usuwania elementu
  const deleteItem = (id) => {
    if(window.confirm('Na pewno usunąć?')) {
      // Usuwamy element z listy
      const updatedItems = items.filter(item => item.id !== id);
      
      // Ustawiamy nową listę, by zaktualizować UI
      setItems(updatedItems); // Nowy stan zaktualizowanej listy
      
      // backend - delete
      fetchPrivateData('/cms-delete-portfolio/' + id, null, 'DELETE') // Wywołanie publicznej funkcji z api.js
        .then(data => {
          setLoading(false); // Wyłączenie ładowania
        })
        .catch(err => {
          setError(err.message); // Ustawienie błędu
          setLoading(false); // Wyłączenie ładowania mimo błędu
        });
    }
  };

  return (
    <div className="list">
      <div className="list__details">
        {items.length > 0 ? (
          items.map(item => (
            <div className="list__details__one" key={item.id}>
              <div className="name">
                <div>{item.name}</div>
                <div>{item.company}</div>
              </div>
              <div className="btns">
                <button className="btn" onClick={() => onChangeViewMode('edit', item.id)}>Edytuj</button>
                <button className="btn" onClick={() => deleteItem(item.id)}>Usuń</button>
              </div>
            </div>
          ))
        ) : (
          <div>Brak danych do wyświetlenia</div>
        )}
      </div>
      
      
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

export default List;
