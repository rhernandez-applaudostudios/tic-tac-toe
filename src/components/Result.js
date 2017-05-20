import React from 'react';

function Result({result}) {
  const stringResult = result === 'X' ? 
      'The winner is player X!!' : result === '0' ?
          'The winner is player O!!' : result === undefined ? 
              '' : result === 'DRAW' ?
                  'Is a tie :(' : 'Game in progress.. Good luck !';
  return (
    <div className="results">
      {stringResult}
    </div>
  );
}

export default Result;