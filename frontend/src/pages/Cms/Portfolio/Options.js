import React from 'react';

const Options = ({ onChangeViewMode  }) => {
  return (
    <div className="options">
        <h3>
            Portfolio
        </h3>
        <div className="btns">
            <button className="btn" onClick={() => onChangeViewMode('list')}>Lista</button>
            <button className="btn" onClick={() => onChangeViewMode('add')}>Dodaj nowy</button>
        </div>
    </div>
  );
};

export default Options;
