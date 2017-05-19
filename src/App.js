import React, { Component } from 'react';
import logo from './logo.svg';
import gameEngine from './libs/tictactoe-engine';
import BoardSettings from './BoardSettings';
import Board from './Board';
import PlayerTurn from './PlayerTurn';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      settings: {},
      board: [],
      status: {}
    };
  }
  startGame = (size) => {
    let gameHandler = gameEngine.createGame(size);
    this.setState({
      game: gameHandler,
      settings: {
        size
      },
      board: gameHandler.getBoard(),
      turn: gameHandler.getPlayerTurn()
    });
  }
  move = (pos) => {
    let gameHandler = this.state.game;
    let result = gameHandler.move(pos);
    if(result) {
      this.setState({
        status: result,
        turn: gameHandler.getPlayerTurn()
      })
    } else {
      console.error('Moved not performed');
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lets play Tic Tac Toe !</h2>
        </div>
        <div className="appBody">
          <BoardSettings createGame={this.startGame}/>
          <Board board={this.state.board} move={this.move}/>
          <PlayerTurn turn={this.state.turn}/>
          <Result result={this.state.status.state}/>
        </div>
      </div>
    );
  }
}

export default App;

