import React from 'react'

class Boxes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                height: '150px',
                width: '150px',
                backgroundColor: '#12CBC4',
                border: '1px solid #000'
            },
            user: {
                name: 'you'
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
                backgroundImage: "url('data:image/jpeg;base64,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')",
                border: '1px solid #000'
            }
        })
    }


    render() {
        return (
            <div>
            <p>Hello {this.state.user.name}</p>
           

            </div>
        )
    }

}


//#F79F1F




export default Boxes