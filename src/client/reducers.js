import Snake from './logic/snake'
import { INIT_DIRECTION, INIT_HEAD, INIT_LENGTH } from './constants/board'
import { TICK } from './actions'
import { findNextHeadLocation } from '../shared/utilFunctions'

const game = Snake()

const initialState = {
  board: game.makeBoard(),
  direction: INIT_DIRECTION,
  head: INIT_HEAD,
  length: INIT_LENGTH,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICK: {
      let board = game.move(state.board, state.head, state.direction, state.length)
      board = game.tick(board)
      const head = findNextHeadLocation([board.length, board[0].length], state.head, state.direction)

      return Object.assign({}, state, { game, head })
    }
    default: return state
  }
}

export default reducer
