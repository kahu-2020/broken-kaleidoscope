import React from 'react'

// const Pixel = props => {
//   return (


class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'aqua'
      }
    }
  }

  render() {
    return (
      <div style={this.state.style}>
      </div>
    )
  }
}



export default Pixel