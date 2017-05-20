import React from 'react';

function Cell({ onClick, classModifiers, position, value }) {
  const cellType = (value === 'CELL_EMPTY') ? 'empty' : value.toLowerCase();

  return (
  <div className={ `cell cell-${cellType} ${classModifiers}`} 
    onClick={() => { onClick({ row: position[0], col: position[1] }) }}>
      <span>{ (cellType === 'empty')? '' : cellType}</span>
  </div>
  );
}

export default Cell;