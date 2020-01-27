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
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
    this.randomColor=this.randomColor.bind(this)
    this.turnBlack=this.turnBlack.bind(this)
  }

  randomColor() {
  console.log('click')


    this.setState({
      style:{
        backgroundColor: randomHexColor(),
        height: '50px',
        width: '50px'

     }
    })
  }

  turnBlack() {
    this.setState({
      style:{
        backgroundColor: 'black',
        height: '50px',
        width: '50px'
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