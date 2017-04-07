import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import StartButton from '../containers/StartButton'
import StopButton from '../containers/StopButton'
import ScoreDisplay from '../containers/ScoreDisplay'

const styles = {
  header: {
    float: 'right',
  },
}

const Header = ({ classes }) => {
  return (
    <div className={classes.header}>
      <StartButton />
      <StopButton />
      <ScoreDisplay />
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(styles)(Header)
