import React from 'react'
import Gameboard from './containers/Gameboard'
import StartButton from './containers/StartButton'
import StopButton from './containers/StopButton'

const App = () => {
  return (
    <div>
      <Gameboard />
      <StartButton />
      <StopButton />
    </div>
  )
}

export default App
