import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import Cell from './Cell'

const styles = {
  board: {
    margin: '0 auto',
    width: '40%',
  },
  row: {
    background: 'white',
    margin: 0,
    padding: 0,
    height: '12px',
  },
}

const Board = ({ classes, board }) => {
  const rows = board.map((row) => {
    const cells = row.map((cell) => {
      return <Cell key={cell.key} value={cell.value} />
    })
    return <div key={row.key} className={classes.row}>{cells}</div>
  })

  return <div className={classes.board}> { rows } </div>
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default injectSheet(styles)(Board)
