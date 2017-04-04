import { connect } from 'react-redux'

import { changeDirection } from '../actions'
import Board from '../components/Board'

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
      return dispatch(changeDirection(e.keyCode))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
