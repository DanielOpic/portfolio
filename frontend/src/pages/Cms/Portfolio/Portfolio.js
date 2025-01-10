import React, { useState } from 'react';
import PortfolioList from './PortfolioList';
import PortfolioForm from './PortfolioForm';

const CmsPortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, title: 'Projekt 1', description: 'Opis projektu 1', image: 'test.jpg' },
    { id: 2, title: 'Projekt 2', description: 'Opis projektu 2', image: 'test.jpg' }
  ]);

  const [newProject, setNewProject] = useState({ title: '', description: '', image: '' });

  const addProject = () => {
    const newItem = { ...newProject, id: portfolioItems.length + 1 };
    setPortfolioItems([...portfolioItems, newItem]);
    setNewProject({ title: '', description: '', image: '' });
  };

  const editProject = (id) => {
    const editedProject = portfolioItems.find(item => item.id === id);
    setNewProject(editedProject);
  };

  const deleteProject = (id) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Portfolio CMS</h2>
      <PortfolioForm
        newProject={newProject}
        setNewProject={setNewProject}
        addProject={addProject}
      />
      <PortfolioList
        portfolioItems={portfolioItems}
        editProject={editProject}
        deleteProject={deleteProject}
      />
    </div>
  );
};

export default CmsPortfolio;
