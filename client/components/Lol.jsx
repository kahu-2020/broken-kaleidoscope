import React from 'react'

class Lol extends React.Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
          luckyNumber: 0
      }
    
    
    this.handleClick = this.handleClick.bind(this)
    
    }
    
    
    
    handleClick() {
      console.log('you clicked the button')
    
      this.setState({
        luckyNumber: Math.floor(Math.random() * 100)
      })
    }
    
      render() {
      return (
     
     <section>
    
       <p>Whats your lucky number??</p>
       <button onClick={this.handleClick}>Click here to find out</button>
       <h1>{this.state.luckyNumber}</h1>
     </section>
    
      )} 
    
    
    }

    export default Lol