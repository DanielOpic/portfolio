import React, { useState, useEffect } from 'react';
import { fetchPrivateData } from '../../../api/api'; // Importujemy funkcję z api.js
import { fetchPublicData } from '../../../api/api'; // Importujemy funkcję z api.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import głównego pliku CSS Bootstrapa

const Edit = ({ currentId, onChangeViewMode  }) => {
  const [formData, setFormData] = useState({ 
    id:           0,
    name:         '',
    company:      '',
    fromdate:     '',
    todate:       '',
    current:      0,
    description:  '', 
  });

  const [loading, setLoading] = useState(true); // Flaga ładowania
  const [error, setError] = useState(null); // Flaga błędów

  // Załaduj dane na podstawie currentId, gdy currentId się zmieni
  useEffect(() => {
    
    setFormData({
      id:           currentId,
      name:         '',
      company:      '',
      fromdate:     '',
      todate:       '',
      current:      0,
      description:  '',
    });

    if(currentId > 0){
       //- backend - read
      fetchPublicData('/read-experience/'+currentId, null, 'GET') // Wywołanie publicznej funkcji z api.js
        .then(data => {
          setLoading(false) // Wyłączenie ładowania
          setFormData(data)
        })
        .catch(err => {
          setError(err.message)
          setLoading(false) // Wyłączenie ładowania mimo błędu
        });
    }

  }, [currentId]); // Będzie wywoływać się przy zmianie currentId


  const handleChange = (e) => {
    let { name, type, checked, value } = e.target;

    if(name === 'current'){
      value = (value == 'true')?1:0
      console.log(value)
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //- backend - save
    fetchPrivateData('/cms-edit-experience', formData, 'PUT') // Wywołanie publicznej funkcji z api.js
      .then(data => {
        setLoading(false); // Wyłączenie ładowania
        onChangeViewMode('list')
      })
      .catch(err => {
        setError(err.message);
        setLoading(false); // Wyłączenie ładowania mimo błędu
      });
  };


  return (
    <div className="form">
      <h4>{formData.id === 0 ? 'Dodaj nowy element' : 'Edytuj element'}</h4>
      <form onSubmit={handleSubmit}>

          {/* --- Id --- */}
            <input 
              type="hidden" 
              name="id" 
              value={formData.id} 
              onChange={handleChange} 
              placeholder="Id" 
            />

      <div className="container">
      <div className="row">
        <div className="col">
          
          
          {/* --- Name --- */}
          <div className="mb-3">
            <label className="form-label">Nazwa:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Nazwa" 
              className="form-control" 
            />
          </div>
          
          {/* --- Company --- */}
          <div className="mb-3">
            <label className="form-label">Firma:</label>
            <input 
              type="text" 
              name="company" 
              value={formData.company} 
              onChange={handleChange} 
              placeholder="Firma" 
              className="form-control" 
            />
          </div>


          
          {/* --- Dates --- */}
          
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Data od:</label>
                <input 
                  type="date" 
                  name="fromdate" 
                  value={formData.fromdate} 
                  onChange={handleChange} 
                  placeholder="Data od" 
                  className="form-control" 
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-1">
                <label className="form-label">Data do:</label>
                <input 
                  type="date" 
                  name="todate" 
                  value={formData.todate}
                  onChange={handleChange} 
                  placeholder="Data do" 
                  className={`form-control ${(formData.current == 1) ? "d-none" : ""}`}
                />
              </div>

              <div className="d-flex flex-row-reverse">
                <div className="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    name="current" 
                    checked={formData.current == 1}
                    value={formData.current} 
                    onChange={handleChange} 
                    placeholder="Obecny" 
                    className="form-check-input"
                    id="current"
                  /> 
                  <label className="form-check-label" htmlFor="current"> obecnie trwa</label>
                </div>
              </div>

            </div>
          </div>





        </div>
        <div className="col-8">

          {/* --- Description --- */}
          <div className="mb-3">
            <label className="form-label">Opis:</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              placeholder="Opis" 
              rows="10"
              className="form-control" 
            />
          </div>

        </div>
      </div>
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
