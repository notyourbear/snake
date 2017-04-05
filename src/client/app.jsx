import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import Gameboard from './containers/Gameboard'
import StartButton from './containers/StartButton'
import StopButton from './containers/StopButton'
import ScoreDisplay from './containers/ScoreDisplay'

const styles = {
  container: {
    marginTop: '50px',
  },
}

const App = ({ classes }) => {
  const containerClass = `${classes.container} container`

  return (
    <div className={containerClass}>
      <div className="row">
        <div className="two columns">&nbsp;</div>
        <div className="eight columns">
          <StartButton />
          <StopButton />
          <ScoreDisplay />
        </div>
        <div className="two columns">&nbsp;</div>
      </div>
      <div className="row">
        <div className="two columns">&nbsp;</div>
        <Gameboard />
        <div className="two columns">&nbsp;</div>
      </div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(styles)(App)
