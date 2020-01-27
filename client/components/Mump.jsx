import React from 'react'


class Clump extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            oneTurn: false,
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#12CBC4',
                border: '1px solid #000'
            }
        }

        //bind onclick
        this.playerOneTurn = this.playerOneTurn.bind(this)
        this.playerTwoTurn = this.playerTwoTurn.bind(this)
        this.turnpicker = this.turnpicker.bind(this)

    }

    //onclick
    playerOneTurn() {
        this.setState({
            oneTurn: true,
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#F79F1F',
                border: '1px solid #000'
            }
        })
    }

    playerTwoTurn() {
        this.setState({
            oneTurn: false,
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#C4E538',
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