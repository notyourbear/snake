import { connect } from 'react-redux'

import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board: state.game.board,
  }
}

export default connect(mapStateToProps, null)(Board)
