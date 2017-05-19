import React, { Component } from 'react';

function Cell({ move, classModifiers, position, value }) {
  if (value === 'X') {
    return <div className={'cell cell-x' + classModifiers} onClick={() => { move({ row: position[0], col: position[1] }) }}><span>x</span></div>;
  } else if (value === '0') {
    return <div className={'cell cell-0' + classModifiers} onClick={() => { move({ row: position[0], col: position[1] }) }}><span>o</span></div>;
  } else {
    return <div className={'cell cell-empty' + classModifiers} onClick={() => { move({ row: position[0], col: position[1] }) }}></div>;
  }
}

export default Cell;