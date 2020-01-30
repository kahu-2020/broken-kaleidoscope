import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


  class Pixel extends React.Component {
    constructor(props) {
        super(props)



        this.state = {
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor ()
            }
        }
        
        this.changeColours = this.changeColours.bind(this)
        this.setToBlack = this.setToBlack.bind(this)
        this.turnPurple = this.turnPurple.bind(this)
    }

   
    
    
    changeColours() {

        console.log('hello')
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor()
            }
        })
    }

    setToBlack() {

        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'black',
            }
        })
    }

    turnPurple() {
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'purple'
            }
        })
    }

    
    render() {
        return (
            <div id='pixel'>
                <div style={this.state.style} onClick={this.changeColours} onContextMenu={this.setToBlack} onDragEnter={this.turnPurple}></div>
            </div>
        )
    }
}

export default Pixel