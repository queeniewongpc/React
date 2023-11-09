import React, { useState } from 'react';
import './Cell.css';

function Cell({ toggleCell, isOn }) {
  const handleClick = () => {
    toggleCell(); // This function is passed from the parent to change the state
  };

  return (
    <div 
      className={`cell ${isOn ? 'on' : ''}`}
      onClick={handleClick}
    />
  );
}

export default Cell;
