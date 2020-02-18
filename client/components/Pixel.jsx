import React from "react"
import { blue } from "color-name"

class Pixel extends React.Component {
    constructor() {
        super()

        this.state = {
            style: {
            height: '50px',
            width: '50px',
            backgroundColor: 'blue'
            }
        }
    }



    render() {
        return (
            <div style = {this.state.style}>
                
            </div>
        )
    }

}

export default Pixel