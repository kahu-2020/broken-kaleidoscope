import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  return Array.from({length: 5000}, () => <Pixel/>)
}

export default App
