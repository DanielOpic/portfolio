import React, { useState } from 'react';

const List = ({ onChangeViewMode }) => {
  
  // Dane statyczne na razie
  const getItems = () => [
    { id: 1, title: 'Projekt 1', description: 'Opis projektu 1', image: '/img/test.jpg' },
    { id: 2, title: 'Projekt 2', description: 'Opis projektu 2', image: '/img/test.jpg' },
  ];
  const [items, setItems] = useState(getItems()); // Wykorzystujemy funkcję do pobrania danych

 // Funkcja do usuwania elementu
 const deleteItem = (id) => {
  // Usuwamy element z listy
  const updatedItems = items.filter(item => item.id !== id);
  
  // Ustawiamy nową listę, by zaktualizować UI
  setItems(updatedItems); // Nowy stan zaktualizowanej listy
  console.log('- backend - delete'); // Logika backendowa w przyszłości
};


  return (
    <div className="list">
      <div className="list__details">
        {items.map(item => (
          <div className="list__details__one" key={item.id}>
            <div 
              className="img" 
              style={{ backgroundImage: `url(${item.image})` }}
              title={item.title}
            ></div>
            <div className="title">{item.title}</div>
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
