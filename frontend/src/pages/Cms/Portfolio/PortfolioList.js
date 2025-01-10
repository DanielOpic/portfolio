import React from 'react';

const PortfolioList = ({ portfolioItems, editProject, deleteProject }) => {
  return (
    <ul>
      {portfolioItems.map(item => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={`/assets/${item.image}`} alt={item.title} width="100" />
          <button onClick={() => editProject(item.id)}>Edytuj</button>
          <button onClick={() => deleteProject(item.id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
