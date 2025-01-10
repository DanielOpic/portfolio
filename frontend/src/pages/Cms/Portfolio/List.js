import React from 'react';

const List = ({ portfolioItems, editProject, deleteProject }) => {
  return (
    <div>
      <h3>Lista projektów</h3>
      <ul className="list">
        {portfolioItems.map(item => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src={`${item.image}`} alt={item.title} />
            <button onClick={() => editProject(item.id)}>Edytuj</button>
            <button onClick={() => deleteProject(item.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
