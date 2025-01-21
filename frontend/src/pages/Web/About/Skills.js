import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Dodanie całej kolekcji ikon solid (lub wybranych ikon)
library.add(fas);

const Skills = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
      
    const data = {
      1: {
        name: 'Programowanie',
        color: '#b854d4',
        list: {
          0: { name: 'PHP', fi: '' },
          1: { name: 'OOP', fi: '' },
          2: { name: 'Symfony', fi: '' },
          3: { name: 'CakePHP', fi: '' },
          4: { name: 'YII', fi: '' },
          5: { name: 'Laravel', fi: '' },
        },
      },
      2: {
        name: 'Projektowanie',
        color: '#6684e1',
        list: {
          0: { name: 'Zeplin', fi: '' },
          1: { name: 'Draw.io', fi: 'fa-solid fa-user' },
          2: { name: 'UX / UI', fi: '' },
          3: { name: 'RWD', fi: '' },
          4: { name: 'Adobe Photoshop', fi: '' },
          5: { name: 'Adobe Indesign', fi: 'fa-solid fa-truck-fast' },
        },
      },
      3: {
        name: 'Inne',
        color: '#b65611',
        list: {
          0: { name: 'Scrum', fi: '' },
          1: { name: 'Agile', fi: '' },
          2: { name: 'Jira', fi: '' },
          3: { name: 'Trello', fi: '' },
          4: { name: 'Atlassian service desk', fi: '' },
          5: { name: 'SEO', fi: '' },
        },
      },
    };
    setItems(Object.values(data));
  }, []);

  return (
    <div className="skills boxdown">
      <h2>Umiejętności</h2>
      <div className="skills__inside">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.name} className="skills__item">
              <h3 style={{ color: item.color }}>{item.name}</h3>
              <ul>
                {Object.values(item.list).map((listItem) => (
                  <li key={listItem.name}>
                    {/* Wyświetlanie ikony za pomocą FontAwesomeIcon */}
                    {listItem.fi && <FontAwesomeIcon icon={listItem.fi} style={{ marginRight: '8px' }} />}
                    {listItem.name}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div>Brak danych do wyświetlenia</div>
        )}
      </div>
    </div>
  );
};

export default Skills;
