import React, { Component } from 'react';

function PlayerResults({ show, player1, player2, draws }) {
  if (!show) {
    return null;
  }
  return (
    <div className="player-results">
      <div className="player-results__player1 player-1"><span className="amount">{player1} wins</span><span>x</span></div>
      <div className="player-results__player2 player-2"><span className="amount">{player2} wins</span><span>o</span></div>
      <div className="player-results__draws"><span className="amount">{draws} draws</span><span>-</span></div>
    </div>
  );
}

export default PlayerResults;