import React from 'react';

const PortfolioForm = ({ newProject, setNewProject, addProject }) => {
  return (
    <div>
      <input
        type="text"
        value={newProject.title}
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        placeholder="Tytuł projektu"
      />
      <textarea
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        placeholder="Opis projektu"
      />
      <input
        type="text"
        value={newProject.image}
        onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
        placeholder="Ścieżka do zdjęcia"
      />
      <button onClick={addProject}>Dodaj projekt</button>
    </div>
  );
};

export default PortfolioForm;
