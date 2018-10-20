import React, { Component } from 'react';
// import logo from './logo.svg';

import Game from './components/Game';
import './App.css';


class App extends Component {
  state = {
    gameId: 1,
  };

  resetGame = () =>
    this.setState((prevState) => ({
      gameId: prevState.gameId + 1,
  }));

  render() {
    return (
      <div className="App">
        <Game key={this.state.gameId}
        autoPlay={this.state.gameId > 1}
        challengeSize={6}
        challengeRange={[2, 9]}
        initialSeconds={10}
        onPlayAgain={this.resetGame} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
