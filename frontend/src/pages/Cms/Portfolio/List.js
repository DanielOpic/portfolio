import React from 'react';

const List = ({ portfolioItems, editProject, deleteProject }) => {
  return (
    <div className="list">
      <h3>Lista projektów</h3>
      <div className="list__details">
        {portfolioItems.map(item => (
          <div className="list__details__one" key={item.id}>
            <div className="img" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="title">{item.title}</div>
            <div className="btns">
              <button onClick={() => editProject(item.id)}>Edytuj</button>
              <button onClick={() => deleteProject(item.id)}>Usuń</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
