import { connect } from 'react-redux'
import { changeDirection } from '../actions'

import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board: state.game.board,
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
