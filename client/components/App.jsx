import React from 'react'
import Pixel from './Pixel'

const App = () => {

  // let t = (<Pixel />)

  // return Array.from({ length: 100 }, () => t);

  // these two functions perform the same action

  // return new Array(5000).fill(t)

  return new Array(5000).fill(<Pixel />)
}

// let manyPixels = []

// for (let i = 0; i < 1000; i++) {
//   manyPixels.push(<Pixel />)
// }

// return manyPixels


export default App
