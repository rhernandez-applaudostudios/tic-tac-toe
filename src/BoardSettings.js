import React, { Component } from 'react';

class BoardSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { size: 3 } // initial value
  }

  onInputChange(size) {
    this.setState({ size });
    // this.props.onSizeChange(term); // notify parent state and save the value
  }

  onCreateClick() {
    this.props.createGame(this.state.size);
  }

  render() {
    return (
      <div className="boardSettings">
        <div className="settings-label">Select the size of the board</div>
        <div className="settings-input">
            <input
                type="number"
                min="3"
                max="15"
                step="1"
                value={this.state.size}
                name="board-size"
                onChange={(event) => this.onInputChange(event.target.value)} />
        </div>
        <div>
            <button className="settings-button" onClick={(event) => this.onCreateClick()}>Start game</button>
        </div>
      </div>
    );
  }
}

export default BoardSettings;