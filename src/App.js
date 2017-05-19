import React, { Component } from 'react';
import logo from './logo.svg';
import gameEngine from './libs/tictactoe-engine';
import BoardSettings from './BoardSettings';
import Board from './Board';
import PlayerTurn from './PlayerTurn';
import PlayerResults from './PlayerResults';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      size: 3, // initial size
      board: [],
      status: {},
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
          <BoardSettings createGame={this.startGame} status={this.state.status.state} onInputChange={this.onInputChange} size={this.state.size}/>
          <PlayerResults player1={this.state.player1} player2={this.state.player2} draws={this.state.draws} show={this.state.board.length}/>
          <Board board={this.state.board} move={this.move}/>
          <PlayerTurn turn={this.state.turn}/>
          <Result result={this.state.status.state}/>
        </div>
      </div>
    );
  }
}

export default App;

