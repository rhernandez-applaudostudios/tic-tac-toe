import React, { Component } from 'react';
import CellX from './CellX';
import Cell0 from './Cell0';
import CellEmpty from './CellEmpty';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { s: null };
  }
  setAsMove = () => {
    this.props.move({
        row: this.props.position[0],
        col: this.props.position[1]
    });
  }
  render() {
      if(this.props.value === 'X') {
          return <CellX setAsMove={this.setAsMove} classModifiers={this.props.classModifiers}/>;
      } else if (this.props.value === '0') {
        return <Cell0 setAsMove={this.setAsMove} classModifiers={this.props.classModifiers}/>;
      } else {
          return <CellEmpty setAsMove={this.setAsMove} classModifiers={this.props.classModifiers}/>;
      }
  }
}

export default Cell;