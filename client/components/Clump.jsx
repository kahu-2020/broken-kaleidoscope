import React from 'react'




class Clump extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#12CBC4',
                border: '1px solid #000'
            }
        }

        //bind onclick
        this.handleClick = this.handleClick.bind(this)
        this.playerOneTurn = this.playerOneTurn.bind(this)
        //this.playerTwoTurn = this.playerTwoTurn.bind(this)
    }

    

    //onclick
    handleClick() {
        this.setState({
            style: {
                height: '250px',
                width: '250px',
                backgroundColor:
                `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
                border: '1px solid #000'
            }
        })
    }

    clickHandler = evt => {
        this.setState({
            style: {
                height: '250px',
                width: '250px',
                backgroundColor: '#000'
            }
        })
    }

    playerOneTurn() {
        this.setState({
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#FDA7DF',
                border: '1px solid #000'
            }
        })
    }

    playerTwoTurn = evt => {

        evt.preventDefault()

        this.setState({
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#ED4C67',
                border: '1px solid #000'
            }
        })
    }


    render() {
        return (
            <div style={this.state.style} onClick={this.playerOneTurn} onContextMenu={this.playerTwoTurn}>

            </div>
        )
    }

}


//#F79F1F




export default Clump