import Snake from './logic/snake'
import { INIT_DIRECTION, INIT_HEAD, INIT_LENGTH } from './constants/board'
import { TICK, CHANGE_DIRECTION, START } from './actions'
import { findNextHeadLocation, keyCodeToDirection } from '../shared/utilFunctions'
import * as keyCodes from './constants/keys'

const game = Snake()

const initialState = {
  board: game.addSnakeHead(game.makeBoard()),
  direction: INIT_DIRECTION,
  head: INIT_HEAD,
  length: INIT_LENGTH,
  intervalId: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START: {
      return Object.assign({}, state, { intervalId: action.payload })
    }
    case TICK: {
      let board = game.move(state.board, state.head, state.direction, state.length)
      board = game.tick(board)
      const head = findNextHeadLocation([board.length, board[0].value.length], state.head, state.direction)

      return Object.assign({}, state, { board, head })
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
