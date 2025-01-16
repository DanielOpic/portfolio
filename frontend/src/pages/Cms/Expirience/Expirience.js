import React, { useState } from 'react';
import List from './List';
import Edit from './Edit';
import Options from './Options';
import '../../../styles/Cms.scss';

const CmsExpirience = () => {


  const [currentId, setCurrentId] = useState(0);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'edit', 'add'
  
  const changeViewMode = (type = 'list', id = 0) => {
    setCurrentId(id)
    switch (type) {
      case 'list':
        setViewMode('list');
        break;
      case 'add':
        setViewMode('add');
        break;
      case 'edit':
        setViewMode('edit');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Options onChangeViewMode={changeViewMode}/>

      {viewMode === 'list' && (
        <List
          onChangeViewMode={changeViewMode}
        />
      )}

      {(viewMode === 'edit' || viewMode === 'add') && (
        <Edit 
          currentId={currentId} 
          onChangeViewMode={changeViewMode}
        />
      )}
    </div>
  );
};

export default CmsExpirience;
