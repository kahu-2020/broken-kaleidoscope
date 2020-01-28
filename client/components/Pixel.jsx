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
        height: '10px',
        width: '10px',
        backgroundColor: randomHexColor()
      }
    }
    
    // function changeColor () {
      setInterval(this.setNewColor, 200)
    // }
    // changeColor()

  

    this.clickHandler = this.clickHandler.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.rightClick = this.rightClick.bind(this)
    this.onDoubleClick = this.onDoubleClick.bind(this)
    this.dragEnter = this.dragEnter.bind(this)
    this.setNewColor = this.setNewColor.bind(this)
  }

  clickHandler() {
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: '10px',
        width: '10px'
      }
    })
  }

  onMouseEnter() {
    this.setState({
      style: {
        backgroundColor: 'green',
        height: '10px',
        width: '10px'
      }
    })
  }

  rightClick(evt) {
    evt.preventDefault()

    this.setState({
      style: {
        backgroundColor: 'black',
        height: '10px',
        width: '10px'
      }
    })
  }

  onDoubleClick() {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: '10px',
        width: '10px'
      }
    })
  }

  dragEnter() {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: '10px',
        width: '10px'
      }
    })
  }

 setNewColor () {
   this.setState({
     style:{...this.state.style, backgroundColor:randomHexColor() }
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
        onDragEnter={this.dragEnter}
      ></div>
    )
  }
}




export default Pixel 


