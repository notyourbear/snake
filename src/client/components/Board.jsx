import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import GameRow from '../containers/GameRow'

const styles = {
  board: {
    margin: '0 auto',
    width: '40%',
    listStyle: 'none',
  },
}

const Board = ({ classes, board, handleKeystroke }) => {
  return (
    <ul tabIndex={0} onKeyDown={handleKeystroke} className={classes.board}>
      { board.map((row) => {
        return <GameRow key={row.id} id={row.id} />
      }) }
    </ul>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  handleKeystroke: PropTypes.func.isRequired,
}

export default injectSheet(styles)(Board)
