import Snake from './logic/snake'
import { INIT_DIRECTION, INIT_HEAD, INIT_LENGTH } from './constants/board'
import { TICK, CHANGE_DIRECTION } from './actions'
import { findNextHeadLocation, keyCodeToDirection } from '../shared/utilFunctions'
import * as keyCodes from './constants/keys'

const game = Snake()

const initialState = {
  board: game.addSnakeHead(game.makeBoard()),
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
    case CHANGE_DIRECTION: {
      switch (action.payload) {
        case keyCodes.LEFT:
        case keyCodes.RIGHT:
        case keyCodes.UP:
        case keyCodes.DOWN:
          return Object.assign({}, state, { direction: keyCodeToDirection(action.payload) })
        default: return state
      }
    }
    default: return state
  }
}

export default reducer
