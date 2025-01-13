import React, { useState, useEffect } from 'react';

const Edit = ({ currentId, onChangeViewMode  }) => {
  const [formData, setFormData] = useState({ id:0, title: '', description: '' });

  // Załaduj dane na podstawie currentId, gdy currentId się zmieni
  useEffect(() => {
   
    setFormData({
      id:           currentId,
      title:        '',
      description:  '',
      image:        '',
    });

  }, [currentId]); // Będzie wywoływać się przy zmianie currentId


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('- backend - save')
  };


  return (
    <div className="form">
      <h4>{formData.id === 0 ? 'Dodaj nowy element' : 'Edytuj element'}</h4>
      <form onSubmit={handleSubmit}>

        <div className="formGroup">
          <label>Tytuł:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Tytuł" 
          />
        </div>
        <div className="formGroup">
          <label>Opis:</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Opis" 
            rows="15"
          />
        </div>

        <div className="btns">
          <button className="btn" onClick={() => onChangeViewMode('list')}>Anuluj</button>
          <button className="btn" type="submit">{formData.id === 0 ? 'Dodaj' : 'Zapisz'}</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
