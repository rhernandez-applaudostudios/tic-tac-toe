import React from 'react';
import Cell from './Cell.js';

function Board({ board, move }) {
  if (board.length === 0) {
    return <div className=""></div>;
  }
  return (
    <div className="board">
      {
        board.map((cell, i, arr) => {
          let baseClass = '';
          if (i === 0) {
            baseClass += ' cell--first';
          } else if (i === arr.length - 1) {
            baseClass += ' cell--last';
          }
          return (
            <div key={i} className="board-row">
              {
                board.map((cell, j, arr) => {
                  let position = [i, j];
                  let classes = baseClass;
                  if (j === 0) {
                    classes += ' cell--top';
                  } else if (j === arr.length - 1) {
                    classes += ' cell--bottom';
                  }
                  return <Cell key={`${i} - ${j}`} classModifiers={classes} position={position} value={board[i][j]} onClick={move} />
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default Board;