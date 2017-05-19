class tictactoe {
	constructor(n) {
		this.CELL_EMPTY = 'CELL_EMPTY';
		this.CELL_X = 'X';
		this.CELL_0 = '0';
		this.PLAYERS = [this.CELL_X, this.CELL_0]
		this.PLAYER_TURN = 0;
		this.WINNING_LENGTH = Number(n);
		this.MOVES_COUNT = 0;
		this.n = n;
		this.board = [];
		this.createBoard();
    this.state = 'START'; // finished (DRAW | X | 0 ) | DONE ( MEANS PLAYING ) | START
	}

  getBoard() {
    return this.board;
  }

	createBoard() {
		let size = this.n;
		let boardResult = [];
		for (var i = 0; i < size; i++) {
			boardResult[i] = [];
			for (var j = 0; j < size; j++) {
				boardResult[i][j] = this.CELL_EMPTY;
			}
		}
		
		this.board = boardResult;
	}

	isValidMove(move) {
		return (move.row >= 0 && move.row < this.board.length) &&
		   (move.col >= 0 && move.col < this.board.length) &&
			 (this.board[move.row][move.col] === this.CELL_EMPTY);
	}

	getPlayerTurn() {
		return this.PLAYERS[this.PLAYER_TURN];
	}

	move(move) {
		if(this.isValidMove(move) && ~['DONE', 'START'].indexOf(this.state)) {
			let moveState = this.PLAYERS[this.PLAYER_TURN];
			let count = 0;
			let state;
			this.board[move.row][move.col] = moveState;
			this.PLAYER_TURN = !~(this.PLAYER_TURN - 1) ? 1 : 0;
			this.MOVES_COUNT++;
			
			// check winner after last move
			// verify col
			count=0;
			for(let i = 0; i< this.board.length; i++) {
				if(this.board[move.row][i] !== moveState) {
					count=0;
				} else {
					count++;
				}
				if(count === this.WINNING_LENGTH) {
					// report win
					state = moveState;
					break;
				}
			}
			if (state) {this.state = state; return { state };}
			// verify row
			count=0;
			for(let i = 0; i< this.board.length; i++) {
				if(this.board[i][move.col] !== moveState) {
					count=0;
				} else {
					count++;
				}
				if(count === this.WINNING_LENGTH) {
					// report win
					state = moveState;
					break;
				}
			}
			if (state) {this.state = state; return { state };}
			// verify diagonal
			count=0;
			for(let i = 0; i< this.board.length; i++) {
				if(this.board[i][i] !== moveState) {
					count=0;
				} else {
					count++;
				};
        if(count === this.WINNING_LENGTH) {
					// report win
					state = moveState;
					break;
				}
			}
			if (state) {this.state = state; return { state };}
			// // verify diagonal 2
			count=0;
			for(let i = 0; i< this.board.length; i++) {
				if(this.board[i][(this.board.length - 1) - i] !== moveState) {
					count=0;
				} else {
					count++;
				}
				if(count === this.WINNING_LENGTH) {
					// report win
					state = moveState;
					break;
				}
			}
			if (state) {this.state = state; return { state };}
			if (this.MOVES_COUNT === this.n*this.n) {
				return {
					state: 'DRAW'
				}
			}
			return {
				state: 'DONE'
			};
		}
		return false;
	}
}

export default {
  createGame: (size) => {
    return new tictactoe(size);
  }
};