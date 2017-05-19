import React, { Component } from 'react';

class CellX extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'cell cell-x' + this.props.classModifiers} onClick={this.props.setAsMove}><span>x</span></div>
    );
  }
}

export default CellX;