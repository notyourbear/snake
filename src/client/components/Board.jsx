import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import Cell from './Cell'

const styles = {
  board: {
    margin: '0 auto',
    width: '40%',
    listStyle: 'none',
  },
  row: {
    background: 'white',
    margin: 0,
    padding: 0,
    height: '12px',
  },
}

const Board = ({ classes, board, handleKeystroke }) => {
  const rows = board.map((row) => {
    const cells = row.value.map((cell) => {
      return <Cell key={cell.id} value={cell.value} />
    })
    return <li key={row.id} className={classes.row}>{cells}</li>
  })

  return <ul tabIndex={0} onKeyDown={handleKeystroke} className={classes.board}> { rows } </ul>
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  handleKeystroke: PropTypes.func.isRequired,
}

export default injectSheet(styles)(Board)
