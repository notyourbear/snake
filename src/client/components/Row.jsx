import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import pure from 'recompose/pure'

import Cell from './Cell'

const styles = {
  row: {
    background: 'white',
    margin: 0,
    padding: 0,
    height: '12px',
  },
}

const Row = ({ classes, value }) => {
  return (
    <li className={classes.row}>
      { value.map((cell) => {
        return <Cell key={cell.id} value={cell.value} />
      }) }
    </li>)
}

Row.propTypes = {
  value: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default pure(injectSheet(styles)(Row))
