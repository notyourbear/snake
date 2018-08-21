import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import GameRow from '../containers/GameRow'
import * as colors from '../colors'

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

const Board = ({ classes, height, gameover, intervalId }) => {
  const rowIds = []
  for (let i = 0; i < height; i++) {
    rowIds.push(i)
  }

  if (gameover) clearInterval(intervalId)
  return (
    <div className="eight columns">
      <ul className={classes.board}>
        { rowIds.map((id) => {
          return <GameRow key={id} id={id} />
        }) }
      </ul>
    </div>
  )
}

Board.propTypes = {
  height: PropTypes.number.isRequired,
  intervalId: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  gameover: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
}

export default injectSheet(styles)(Board)
