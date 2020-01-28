import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                fontFamily: 'Helvetica',
                backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
                width: '100px',
                height: '100px',
            }
        }
        this.handleClick = this.handleClick.bind(this)
        this.hoverClick = this.hoverClick.bind(this)
        this.rightClick = this.rightClick.bind(this)
        this.doubleClick = this.doubleClick.bind(this)
        this.onDrag = this.onDrag.bind(this)
    }

    handleClick () {
        console.log('it works!')

        this.setState({
            style: {
                backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
                width: '100px',
                height: '100px',
            }
        })
    }

    hoverClick () {
        console.log('hover works!')

        this.setState({
            style: {
                backgroundColor: 'green',
                width: '100px',
                height: '100px',
            }
        })
    }

    rightClick(e) {
        console.log(e)
        e.preventDefault()
        
        this.setState( {
            style: {
                backgroundColor: 'black',
                width: '100px',
                height: '100px',
            }
        })
    }

    doubleClick() {
        console.log('it oduble works')

        this.setState({
            style: {
                backgroundColor: 'white',
                width: '100px',
                height: '100px',
            }
        })
    }


    onDrag(e) {
        console.log('it yellow works')
        e.preventDefault()
        this.setState({
            style: {
                backgroundColor: 'yellow',
                width: '100px',
                height: '100px',
            }
        })
    }

    render() {
        return (
            <div style={this.state.style}
            onClick={this.handleClick} onMouseEnter={this.hoverClick} onContextMenu={this.rightClick} onDoubleClick={this.doubleClick} onDragEnter={this.onDrag}></div>
        )
    }

    

        
    
}


export default Pixel