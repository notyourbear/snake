import { connect } from 'react-redux'
import { move } from '../actions'

import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board: state.game.board,
    intervalId: null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFn: location => dispatch(move(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
