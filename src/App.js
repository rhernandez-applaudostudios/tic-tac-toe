import React, { Component } from 'react';
import gameEngine from './libs/tictactoe-engine';
import BoardSettings from './components/BoardSettings';
import Board from './components/Board';
import PlayerTurn from './components/PlayerTurn';
import PlayerResults from './components/PlayerResults';
import Result from './components/Result';

import './App.css';
import './components/Board.css';
import './components/BoardSettings.css';
import './components/Cell.css';
import './components/PlayerResults.css';
import './components/PlayerTurn.css';
import './components/Result.css';

class App extends Component {
  constructor(props) {
    super(props);
    let gameHandler = gameEngine.createGame(3);
    this.state = {
      game: gameHandler,
      board: gameHandler.getBoard(),
      turn: gameHandler.getPlayerTurn(),
      status: gameHandler.getState(),
      size: 3, // initial size
      player1: 0,
      player2: 0,
      draws: 0,
      gameEnded: false
    };
  }
  startGame = () => {
    let gameHandler = gameEngine.createGame(this.state.size);
    this.setState({
      game: gameHandler,
      board: gameHandler.getBoard(),
      turn: gameHandler.getPlayerTurn(),
      status: gameHandler.getState()
    });
  }
  move = (pos) => {
    let gameHandler = this.state.game;
    let result = gameHandler.move(pos);
    if(result) {
      if (~['x', '0', 'draw'].indexOf(result.state.toLowerCase())) {
        let player1 = this.state.player1;
        let player2 = this.state.player2;
        let draws = this.state.draws;
        if (result.state.toLowerCase() === 'x') {
          player1 += 1;
        }
        if (result.state.toLowerCase() === '0') {
          player2 += 1;
        }
        if (result.state.toLowerCase() === 'draw') {
          draws += 1;
        }
        this.setState({
          status: result,
          turn: gameHandler.getPlayerTurn(),
          gameEnded: true,
          player1,
          player2,
          draws
        });
      } else {
        this.setState({
          status: result,
          turn: gameHandler.getPlayerTurn()
        });
      }
    }
  }

  onInputChange = (size) => {
    this.setState({ size });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lets play Tic Tac Toe !</h2>
        </div>
        <div className="appBody">
          <PlayerResults player1={this.state.player1} player2={this.state.player2} draws={this.state.draws} show={this.state.board.length}/>
          <Board board={this.state.board} move={this.move}/>
          <PlayerTurn turn={this.state.turn}/>
          <Result result={this.state.status.state}/>
          <BoardSettings createGame={this.startGame} status={this.state.status.state} onInputChange={this.onInputChange} size={this.state.size}/>
        </div>
      </div>
    );
  }
}

export default App;

