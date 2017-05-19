import React from 'react';

function PlayerTurn({ turn }) {
  if (!turn) {
    return null;
  }
  let player1Active = turn.toLowerCase() === 'x' ? 'player-turn-container__player--active' : '';
  let player2Active = turn.toLowerCase() === '0' ? 'player-turn-container__player--active' : '';
  return (
    <div className="player-turn-container">
      <div className={'player-turn-container__player player-turn-container__player-1 player-1 ' + player1Active}><i>Playing</i><span>x</span></div>
      <div className={'player-turn-container__player player-turn-container__player-2 player-2 ' + player2Active}><i>Playing</i><span>o</span></div>
    </div>
  );
}

export default PlayerTurn;