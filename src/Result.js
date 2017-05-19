import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let stringResult = this.props.result === 'X' ? 
        'The winner is player X!!' : this.props.result === '0' ?
            'The winner is player 0!!' : this.props.result === undefined ? 
                '' : this.props.result === 'DRAW' ?
                    'Is a tie :(' : 'Game in progress.. Good luck !';
    return (
      <div className="Results">
        {stringResult}
      </div>
    );
  }
}

export default Result;