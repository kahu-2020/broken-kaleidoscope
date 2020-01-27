import React from 'react'


// const Pixel = () => {
//   return (
//     <div>
//       <div style={{
//         height: "50px",
//         width:"50px",
//         backgroundColor:"blue"

//       }}></div> 

//     </div>
// )
// }

class Pixel extends React.Component {
  constructor (props) {
    super(props)

  this.state = {
      style: { 
              height: "50px",
              width:"50px",
              backgroundColor:"blue"
            }
    }
  }
  render() {
    return (
      <div style={this.state.style}></div>
    )
  }
}




export default Pixel 


