import React, { Component } from 'react';

class PlayerTurn extends Component {
  render() {
    if (!this.props.turn) {
      return null;
    }
    let player1Active = this.props.turn.toLowerCase() === 'x' ? 'player-turn-container__player--active' : '';
    let player2Active = this.props.turn.toLowerCase() === '0' ? 'player-turn-container__player--active' : '';
    return (
      <div className="player-turn-container">
        <div className={'player-turn-container__player player-turn-container__player-1 ' + player1Active}><span>x</span></div>
        <div className={'player-turn-container__player player-turn-container__player-2 ' + player2Active}><span>o</span></div>
      </div>
    );
  }
}

export default PlayerTurn;