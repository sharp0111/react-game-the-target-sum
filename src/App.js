import React, { Component } from 'react';
// import logo from './logo.svg';

import Game from './components/Game';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Game challengeRange={[2, 9]}
          challengeSize={6}
          answerSize={4}
          initialSeconds={15} />
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
