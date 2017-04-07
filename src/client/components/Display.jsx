import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import * as colors from '../../shared/colors'
import { INIT_LENGTH } from '../constants/board'

const styles = {
  display: {
    padding: '0 20px',
    height: '30px',
    border: `4px solid ${colors.BORDER}`,
    background: `${colors.BACKGROUND}`,
    display: 'inline-block',
    lineHeight: '1.5',
  },
  labl: {
    color: `${colors.FONT}`,
    textTransform: 'uppercase',
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: '6px',
    display: 'inline-block',
    letterSpacing: '2px',
  },
  score: {
    color: `${colors.FONT}`,
    fontSize: '1.25rem',
    fontWeight: '700',
  },
}

const Display = ({ classes, snakeLength }) => {
  const score = snakeLength - INIT_LENGTH
  return (
    <div className={classes.display}>
      <span className={classes.labl}> Score: </span>
      <span className={classes.score}> { score } </span>
    </div>)
}

Display.propTypes = {
  snakeLength: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Display))
