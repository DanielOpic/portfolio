import React, { useState } from 'react';
import List from './List';
import Edit from './Edit';
import '../../../styles/cms.scss';

const CmsPortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, title: 'Projekt 1', description: 'Opis projektu 1', image: '/img/test.jpg' },
    { id: 2, title: 'Projekt 2', description: 'Opis projektu 2', image: '/img/test.jpg' }
  ]);

  const [currentProject, setCurrentProject] = useState({ id: 0, title: '', description: '', image: '' });
  const [viewMode, setViewMode] = useState('list'); // 'list', 'edit', 'add'


  // Usuwanie projektu
  const deleteProject = (id) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  // Przechodzenie do edycji
  const editProject = (id) => {
    const editedProject = portfolioItems.find(item => item.id === id);
    setCurrentProject(editedProject);
    setViewMode('edit'); // Przechodzimy do trybu edycji
  };

  const showAddForm = () => {
    setCurrentProject({ id: 0, title: '', description: '', image: '' });
    setViewMode('add'); // Pokazanie formularza do dodania nowego projektu
  };

  const cancelEdit = () => {
    setCurrentProject({ id: 0, title: '', description: '', image: '' });
    setViewMode('list'); // Powrót do listy po anulowaniu edycji
  };
  
  // Edycja istniejącego projektu lub dodanie nowego
  const saveData = (project) => {
    if (project.id === 0) {
      // Dodanie nowego projektu
      const newItem = { ...project, id: portfolioItems.length + 1 };
      setPortfolioItems([...portfolioItems, newItem]);
    } else {
      // Aktualizacja istniejącego projektu
      setPortfolioItems(portfolioItems.map(item => item.id === project.id ? project : item));
    }
    setCurrentProject({ id: 0, title: '', description: '', image: '' }); // Resetowanie formularza
    setViewMode('list'); // Po zapisaniu wracamy do listy
  };

  return (
    <div>
      <h2>Portfolio CMS</h2>
      {viewMode === 'list' && (
        <>
          <button onClick={showAddForm}>Dodaj projekt</button>
          <List
            portfolioItems={portfolioItems}
            editProject={editProject}
            deleteProject={deleteProject}
          />
        </>
      )}

      {(viewMode === 'edit' || viewMode === 'add') && (
        <Edit
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          saveData={saveData}
          cancelEdit={cancelEdit} // Przycisk do anulowania edycji
        />
      )}
    </div>
  );
};

export default CmsPortfolio;
