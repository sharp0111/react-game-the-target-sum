import React from 'react'
// import '../App.css'

class Target extends React.Component {
    render() {
      return <div className="number">{this.props.value}</div>;
    }
}

export default Target