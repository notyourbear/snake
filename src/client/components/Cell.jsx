import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import * as colors from '../colors'
import * as css from '../constants/styles/board'
import { CRUMPET, BARRIER, PREBARRIER, EMPTY } from '../constants/board'

const styles = {
  emptyCell: {
    width: css.CELL_WIDTH,
    height: css.CELL_WIDTH,
    border: `1px solid ${colors.BORDER}`,
    background: `${colors.BACKGROUND}`,
    display: 'inline-block',
  },
}
styles.crumpetCell = Object.assign({}, styles.emptyCell, { background: `${colors.CRUMPET}` })
styles.snakeCell = Object.assign({}, styles.emptyCell, { background: `${colors.SNAKE}` })
styles.barrierCell = Object.assign({},
  styles.emptyCell,
  { background: `${colors.BARRIER}`, borderColor: `${colors.PREBARRIER}` })
styles.prebarrierCell = Object.assign({}, styles.emptyCell, { background: `${colors.PREBARRIER}` })

const Cell = ({ classes, type, value }) => {
  if (type === EMPTY) return <div className={classes.emptyCell} />
  if (type === CRUMPET) return <div className={classes.crumpetCell} />
  if (type === BARRIER) return <div className={classes.barrierCell} />
  if (type === PREBARRIER) {
    if (value % 10 === 0) return <div className={classes.barrierCell} />
    return <div className={classes.prebarrierCell} />
  }
  return <div className={classes.snakeCell} />
}

Cell.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Cell))
