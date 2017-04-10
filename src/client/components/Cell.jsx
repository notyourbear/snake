import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'
import * as colors from '../../shared/colors'

import { CRUMPET, BARRIER, PREBARRIER, EMPTY } from '../constants/board'

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
styles.barrierCell = Object.assign({}, styles.emptyCell, { background: `${colors.BARRIER}`, borderColor: '#C5EFF7' })
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
