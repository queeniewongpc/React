import React, { useState } from 'react';
import Cell from './Cell';

function Grid() {
  // 2D array to hold the state of each cell, initialized to all "off"
  const [cells, setCells] = useState([
    [false, false],
    [false, false],
  ]);

  const toggleCell = (row, col) => {
    setCells(cells => 
      cells.map((currentRow, rowIndex) => 
        rowIndex === row
          ? currentRow.map((cell, colIndex) => (colIndex === col ? !cell : cell))
          : currentRow
      )
    );
  };

  const countOnCells = cells.flat().filter(isOn => isOn).length;

  return (
    <div>
      <div>Count: {countOnCells}</div>
      <div className="grid">
        {cells.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((isOn, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isOn={isOn}
                toggleCell={() => toggleCell(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
