// TARGET SUM - Starting Template
import React from 'react'
// import ReactDOM from 'react-dom'
import '../App.css'

import _ from 'lodash'
import Number from './Number'
import Target from './Target'
import Timer from './Timer'
import randomNumberBetween from '../helper/Calculate' 

class Game extends React.Component {
    challengeNumbers = Array
    .from({ length: this.props.challengeSize })
    .map(() => randomNumberBetween(...this.props.challengeRange));

    target = _.sampleSize(
    this.challengeNumbers,
    this.props.challengeSize - 2
    ).reduce((acc, curr) => acc + curr, 0);

    render() {
      return (
        <div className="game">
          <div className="help">
            Pick {this.props.answerSize} numbers that sum to the target in {this.props.initialSeconds} seconds
          </div>
          <Target target={this.target} />
          <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
           <Number key={index} value={value} />
          )}
          </div>
          <div className="footer">
            <Timer initialSeconds={this.props.initialSeconds} />
            <button>Start</button>
          </div>
        </div>
      );
    }
}

export default Game

//   ReactDOM.render(<Game />, document.getElementById('mountNode'))