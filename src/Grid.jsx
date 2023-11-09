import React, { useState } from 'react';
import Cell from './Cell';

function Grid() {
  // An array to hold the state of each cell, initialized to all "off"
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = index => {
    // Create a new array with the toggled state
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
  };

  const countOnCells = cells.filter(isOn => isOn).length;

  return (
    <div>
      <div>Count: {countOnCells}</div>
      <div className="grid">
        {cells.map((isOn, index) => (
          <Cell key={index} isOn={isOn} toggleCell={() => toggleCell(index)} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
