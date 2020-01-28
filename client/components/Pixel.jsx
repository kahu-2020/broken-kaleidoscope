import React from 'react'



class Pixel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '20px',
        width:'20px',
        backgroundColor: 'blue',
      }
    }
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      console.log('The button was clicked')

      this.setState({
        style: {
          height: '20px',
          width: '20px',
          backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        }
      })
    }


    clickHandler = evt => {
      this.setState({
          style: {
              height: '20px',
              width: '20px',
              backgroundColor: '#000'
          }
      })
  }

    
  render() {
    return (
        <div style={this.state.style} onClick={this.handleClick}>

        </div>
    )}


  }

  

  export default Pixel