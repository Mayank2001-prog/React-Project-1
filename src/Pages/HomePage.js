import React, { useState } from 'react';
import './Homepage.css';
import AddItems from './AddItems';
import AddPerson from './AddPerson';

const HomePage = () => {
  const [showAddItems, setShowAddItems] = useState(false);
  const [showAddPerson, setShowAddPerson] = useState(false);

  const handleAddItemsClick = () => {
    setShowAddItems(true);
    setShowAddPerson(false)
  };

  const handleAddPersonClick = () => {
    setShowAddItems(false);
    setShowAddPerson(true)
  };

  return (
    <>
      <div className="flexbox">
        <button className='user-btn' onClick={handleAddItemsClick}>Add Items</button>
        <button className='user-btn' onClick={handleAddPersonClick}>Add Users</button>
      </div>
      {showAddItems && <AddItems />}
      {showAddPerson && <AddPerson />}
    </>
  );
};

export default HomePage;
