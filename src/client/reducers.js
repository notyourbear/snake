import Snake from './logic/snake'
import { INIT_DIRECTION, INIT_HEAD, INIT_LENGTH } from './constants/board'
import { TICK, CHANGE_DIRECTION } from './actions'
import { findNextHeadLocation } from '../shared/utilFunctions'
import * as keycodes from './constants/keys'

const game = Snake()

const initialState = {
  board: game.makeBoard(),
  direction: INIT_DIRECTION,
  head: INIT_HEAD,
  length: INIT_LENGTH,
}

console.log('boards', initialState)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICK: {
      let board = game.move(state.board, state.head, state.direction, state.length)
      board = game.tick(board)
      const head = findNextHeadLocation([board.length, board[0].length], state.head, state.direction)

      return Object.assign({}, state, { game, head })
    }
    case CHANGE_DIRECTION: {
      switch (action.payload) {
        case keycodes.LEFT: return Object.assign({}, state, { direction: 'left' })
        case keycodes.RIGHT: return Object.assign({}, state, { direction: 'right' })
        case keycodes.UP: return Object.assign({}, state, { direction: 'up' })
        case keycodes.DOWN: return Object.assign({}, state, { direction: 'down' })
        default: return state
      }
    }
    default: return state
  }
}

export default reducer
