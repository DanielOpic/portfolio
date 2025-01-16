import React, { useState, useEffect } from 'react';
import { fetchPrivateData } from '../../../api/api'; // Importujemy funkcję z api.js

const List = ({ onChangeViewMode }) => {

  
  const [items, setItems] = useState([]); // Domyślnie pusta lista
  const [loading, setLoading] = useState(true); // Flaga ładowania
  const [error, setError] = useState(null); // Flaga błędów

  useEffect(() => {
      // Pobranie danych z API bez potrzeby autoryzacji (publiczne dane)
      fetchPrivateData('/cms-experience') // Wywołanie publicznej funkcji z api.js
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


 // Funkcja do usuwania elementu
 const deleteItem = (id) => {
  if(window.confirm('Na pewno usunąć?')){
    // Usuwamy element z listy
    const updatedItems = items.filter(item => item.id !== id);
    
    // Ustawiamy nową listę, by zaktualizować UI
    setItems(updatedItems); // Nowy stan zaktualizowanej listy
    //backend - delete

    fetchPrivateData('/cms-delete-experience/'+id, null, 'DELETE') // Wywołanie publicznej funkcji z api.js
      .then(data => {
        setLoading(false) // Wyłączenie ładowania
      })
      .catch(err => {
        setError(err.message)
        setLoading(false) // Wyłączenie ładowania mimo błędu
      });
  }
};


  return (
    <div className="list">
      <div className="list__details">
        {items.map(item => (
          <div className="list__details__one" key={item.id}>
            <div className="name">
              <div>{item.name}</div>
              <div>{item.company}</div>
            </div>
            <div className="btns">
              <button className="btn" onClick={() => onChangeViewMode('edit',item.id)}>Edytuj</button>
              <button className="btn" onClick={() => deleteItem(item.id)}>Usuń</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
