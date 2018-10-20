// TARGET SUM - Starting Template
import React from 'react'
// import ReactDOM from 'react-dom'
import '../App.css'
import Number from './Number'
import Target from './Target'
import Timer from './Timer'

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="help">
            Pick 4 numbers that sum to the target in 15 seconds
          </div>
          <Target value={42} />
          <div className="challenge-numbers">
            <Number value={8} />
            <Number value={5} />
            <Number value={12} />
            <Number value={13} />
            <Number value={5} />
            <Number value={16} />
          </div>
          <div className="footer">
            <Timer value={15} />
            <button>Start</button>
          </div>
        </div>
      );
    }
}

export default Game

//   ReactDOM.render(<Game />, document.getElementById('mountNode'))