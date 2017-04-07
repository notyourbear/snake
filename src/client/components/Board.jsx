import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import GameRow from '../containers/GameRow'
import * as colors from '../../shared/colors'

const styles = {
  board: {
    margin: '0 auto',
    listStyle: 'none',
    float: 'right',
    border: `16px solid ${colors.BORDER}`,
    borderRadius: '20px 0 0 0',
    background: `${colors.BACKGROUND}`,
    padding: '6px',
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
  intervalId: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  gameover: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleKeystroke: PropTypes.func.isRequired,
}

export default injectSheet(styles)(Board)
