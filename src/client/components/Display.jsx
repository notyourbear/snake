import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import { INIT_LENGTH } from '../constants/board'

const styles = {
  display: {
    width: '100px',
    height: '20px',
    border: '5px solid black',
    float: 'right',
  },
}

const Display = ({ classes, snakeLength }) => {
  const score = snakeLength - INIT_LENGTH
  return (
    <div className={classes.display}>
      <span className={classes.label}> Score: </span>
      <span className={classes.score}> { score } </span>
    </div>)
}

Display.propTypes = {
  snakeLength: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Display))
