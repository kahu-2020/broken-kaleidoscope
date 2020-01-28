import React from 'react'
import Pixel from './Pixel'

const App = () => {

  let banana = []

  for (let i = 0; i < 1000; i++) {
    banana.push(<Pixel />)
  }


  return banana

}
export default App
