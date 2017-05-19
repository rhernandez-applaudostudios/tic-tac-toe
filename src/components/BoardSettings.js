import React from 'react';

function BoardSettings({ onInputChange, status, createGame, size}) {
  let buttonLabel = !status ? 'Start game!' : 'New Game';
  return (
    <div className="settings">
      <div className="settings-label">
        Select the size of the board:
            <input
          type="number"
          min="3"
          max="15"
          step="1"
          value={size}
          name="board-size"
          onChange={(event) => onInputChange(event.target.value)} />
      </div>
      <div>
        <button className="btn" onClick={(event) => createGame()}>{buttonLabel}</button>
      </div>
    </div>
  );
}

export default BoardSettings;