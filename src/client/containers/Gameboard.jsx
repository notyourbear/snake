import { connect } from 'react-redux'

import { changeDirection } from '../actions'
import Board from '../components/Board'

const boardSelector = (state) => {
  return state.game.board
}

const mapStateToProps = (state) => {
  return {
    board: boardSelector(state),
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
