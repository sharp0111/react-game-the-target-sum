import React from 'react'

class Target extends React.Component {
    render() {
      return <div className="target"
      style={{ backgroundColor: Game.bgColors[gameStatus] }}>
      {this.props.target}
        {this.state.gameStatus === 'new' ? '?' : this.target}
      </div>;
    }
}

export default Target