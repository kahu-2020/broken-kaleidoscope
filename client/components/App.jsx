import React from 'react'
import Pixel from './Pixel'

const App = () => {
    
  //  let square = []
  
  //  for (let i = 0;i < 1000; i++) {
  //       square.push.(<Pixel/>)
  //     }
  //     return square
  //   }

  

  
  return Array.from({length:5}, () => <Pixel/>)

}


export default App
