import React from "react"
import { blue } from "color-name"

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor() {
        super()

        this.state = {
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor()
            }
        }
        // this.turnBlack = this.turnBlack.bind(this)
        this.turnBlue = this.turnBlue.bind(this)
    }

    // turnBlack() {
    //     this.setState({
    //         style: {
    //             backgroundColor: 'black',
    //             height: '50px',
    //             width: '50px'
    //         }
    //     })
    // }

    turnBlue() {
        this.setState({
            style: {
                backgroundColor: 'blue',
                height: '50px',
                width: '50px'
            }
        })
    }

    render() {
        return (
            <div style={this.state.style}  onClick = {this.turnBlue}>

            </div>
        )
    }

}

export default Pixel