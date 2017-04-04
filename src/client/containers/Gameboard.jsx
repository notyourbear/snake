import { connect } from 'react-redux'

import { changeDirection, start, tick } from '../actions'
import Board from '../components/Board'
import { SPACE } from '../constants/keys'
import { TICK_LENGTH } from '../constants/board'

const boardSelector = state => state.game.board
const gameoverSelector = state => state.game.gameover
const intervalIdSelector = state => state.interval

const mapStateToProps = (state) => {
  return {
    board: boardSelector(state),
    gameover: gameoverSelector(state),
    intervalId: intervalIdSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeystroke: (e) => {
      if (e.keyCode === SPACE) {
        const intervalId = setInterval(() => {
          dispatch(tick())
        }, TICK_LENGTH)

        return dispatch(start(intervalId))
      }
      return dispatch(changeDirection(e.keyCode))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
