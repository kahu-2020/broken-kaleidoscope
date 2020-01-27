import React from 'react'
import { green } from 'color-name'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
  }

  clickHandler() {
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: '50px',
        width: '50px'
      }
    })
  }

  onMouseEnter() {
    this.setState({
      style: {
        backgroundColor: "green",
        height: '50px',
        width: '50px'
      }
    })
  }

  render() {
    return <div style={this.state.style} onClick={this.clickHandler} onMouseOver={this.onMouseEnter}></div>
  }
}




export default Pixel 


