import React, { useState, useEffect } from 'react';

const Edit = ({ currentProject, setCurrentProject, saveData, cancelEdit }) => {
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    if (currentProject.id > 0) {
      setFormData({
        title: currentProject.title,
        description: currentProject.description,
        image: currentProject.image
      });
    }
  }, [currentProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(formData); // Wywołanie funkcji saveData z aktualnym stanem formularza
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setCurrentProject({
      ...currentProject,
      [name]: value
    });
  };

  return (
    <div>
      <h3>{currentProject.id === 0 ? 'Dodaj nowy projekt' : 'Edytuj projekt'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="Tytuł projektu" 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Opis projektu" 
          />
        </div>
        <div>
          <label>Image:</label>
          <input 
            type="text" 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            placeholder="Nazwa pliku obrazu" 
          />
        </div>
        <button type="submit">{currentProject.id === 0 ? 'Dodaj' : 'Edytuj'}</button>
      </form>
      <button onClick={cancelEdit}>Anuluj</button>
    </div>
  );
};

export default Edit;
