import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'
import * as colors from '../../shared/colors'

import { CRUMPET } from '../constants/board'

const styles = {
  emptyCell: {
    width: '14px',
    height: '14px',
    border: `1px solid ${colors.BORDER}`,
    background: `${colors.BACKGROUND}`,
    display: 'inline-block',
  },
}
styles.crumpetCell = Object.assign({}, styles.emptyCell, { background: `${colors.CRUMPET}` })
styles.snakeCell = Object.assign({}, styles.emptyCell, { background: `${colors.SNAKE}` })

const Cell = ({ classes, type }) => {
  if (type === 'empty') return <div className={classes.emptyCell} />
  if (type === CRUMPET) return <div className={classes.crumpetCell} />
  return <div className={classes.snakeCell} />
}

Cell.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Cell))
