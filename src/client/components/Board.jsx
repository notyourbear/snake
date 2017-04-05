import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import GameRow from '../containers/GameRow'

const styles = {
  board: {
    margin: '0 auto',
    listStyle: 'none',
    float: 'right',
  },
}

const Board = ({ classes, board, handleKeystroke, gameover, intervalId }) => {
  if (gameover) clearInterval(intervalId)
  return (
    <div className="eight columns">
      <ul autoFocus tabIndex={0} onKeyDown={handleKeystroke} className={classes.board}>
        { board.map((row) => {
          return <GameRow key={row.id} id={row.id} />
        }) }
      </ul>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  intervalId: PropTypes.number.isRequired,
  gameover: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleKeystroke: PropTypes.func.isRequired,
}

export default injectSheet(styles)(Board)
