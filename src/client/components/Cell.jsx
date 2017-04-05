import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import { CRUMPET } from '../constants/board'

const styles = {
  emptyCell: {
    width: '14px',
    height: '14px',
    border: '1px solid #d3d3d3',
    background: 'white',
    display: 'inline-block',
  },
}
styles.crumpetCell = Object.assign({}, styles.emptyCell, { background: 'grey', border: '1px solid grey' })
styles.snakeCell = Object.assign({}, styles.emptyCell, { background: 'black', border: '1px solid black' })

const Cell = ({ classes, value }) => {
  if (value === 0) return <div className={classes.emptyCell} />
  if (value === CRUMPET) return <div className={classes.crumpetCell} />
  return <div className={classes.snakeCell} />
}

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Cell))
