import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

function GridProvider({ children }) {
  const [cells, setCells] = useState([[false, false], [false, false]]);


  const toggleCell = (rowIndex, columnIndex) => {
    const newCells = cells.map((row, rIndex) => 
      row.map((cell, cIndex) => 
        rIndex === rowIndex && cIndex === columnIndex ? !cell : cell
      )
    );
    setCells(newCells);
  };
  

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
        {children}
    </GridContext.Provider>
  );
}