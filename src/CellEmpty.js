import React, { Component } from 'react';

class CellEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'cell cell-empty' + this.props.classModifiers} onClick={this.props.setAsMove}></div>
    );
  }
}

export default CellEmpty;