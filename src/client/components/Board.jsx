import React from 'react'
import injectSheet from 'react-jss'

import Cell from './Cell'

const styles = {
  board: {
    border: '1px solid black',
  },
  rows: {
    background: 'white',
  },
}

const Board = (classes, { board }) => {
  const rows = board.map((row) => {
    const cells = row.map((cell) => {
      return <Cell cell={cell} />
    })
    return <div className={classes.row}>{cells}</div>
  })

  return <div className={classes.board}> { rows } </div>
}

export default injectSheet(styles)(Board)
