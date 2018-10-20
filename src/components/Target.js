import React from 'react'

class Target extends React.Component {
    render() {
      return <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>;
    }
}

export default Target