import { connect } from 'react-redux'

import Board from '../components/Board'
import { BOARD_DIMENSIONS } from '../constants/board'

const gameoverSelector = state => state.game.gameover
const intervalIdSelector = state => state.interval

const mapStateToProps = (state) => {
  return {
    height: BOARD_DIMENSIONS[0],
    gameover: gameoverSelector(state),
    intervalId: intervalIdSelector(state),
  }
}

export default connect(mapStateToProps, null)(Board)
