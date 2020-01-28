import React from 'react'

// const Pixel = props => {
//   return (

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: randomHexColor()
      }
    }
    this.randomColor = this.randomColor.bind(this)
    this.turnBlack = this.turnBlack.bind(this)
  }

  randomColor() {
    console.log('click')


    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: '10px',
        width: '10px'
      }
    })
  }



  turnBlack() {
    this.setState({
      style: {
        backgroundColor: 'black',
        height: '10px',
        width: '10px'
      }
    })
  }



  render() {
    return (
      <div style={this.state.style} onClick={this.randomColor} onMouseEnter={this.turnBlack}>
      </div>
    )
  }
}


export default Pixel


//  const randomHexColor = () =>
// `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`