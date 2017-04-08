import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import * as colors from '../../shared/colors'
import Cell from './Cell'

const styles = {
  row: {
    background: `${colors.BACKGROUND}`,
    margin: 0,
    padding: 0,
    height: '16px',
  },
}

const Row = ({ classes, row }) => {
  console.log('row', row)
  return (
    <li className={classes.row}>
      { row.map((cell) => {
        return <Cell key={cell.id} type={cell.type} />
      }) }
    </li>)
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Row))
