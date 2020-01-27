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
    this.rightClick = this.rightClick.bind(this)
    this.onDoubleClick = this.onDoubleClick.bind(this)
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

  rightClick(evt) {
    evt.preventDefault()
    {
      style: {//set state
        backgroundColor: 'black',
        height: '50px',
        width: '50px'
      }
    })


  }


  onDoubleClick() {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: '50px',
        width: '50px'
      }
    })

  }

  render() {
    return (
      <div
        style={this.state.style}
        onClick={this.clickHandler}
        onMouseOver={this.onMouseEnter}
        onContextMenu={this.rightClick}
        onDoubleClick={this.onDoubleClick}
      ></div>
    )
  }
}




export default Pixel 


