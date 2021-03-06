import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import * as colors from '../colors'
import * as css from '../constants/styles/board'
import Cell from './Cell'

const styles = {
  row: {
    background: `${colors.BACKGROUND}`,
    margin: 0,
    padding: 0,
    height: css.ROW_HEIGHT,
  },
}

const Row = ({ classes, row }) => {
  return (
    <li className={classes.row}>
      { row.map((cell) => {
        return <Cell key={cell.id} type={cell.type} value={cell.value} />
      }) }
    </li>)
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Row))
