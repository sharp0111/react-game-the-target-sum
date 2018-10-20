import React from 'react'

class Timer extends React.Component {
    render() {
      return <div className="timer-value">{this.props.initialSeconds}</div>;
    }
}

export default Timer