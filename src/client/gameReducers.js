import Snake from './logic/snake'
import { INIT_HEAD, INIT_LENGTH, INIT_DIRECTION } from './constants/board'
import { TICK, CHANGE_DIRECTION } from './actions'
import { keyCodeToDirection, findNextHeadLocation, validDirectionChange } from '../shared/utilFunctions'
import * as keyCodes from './constants/keys'

const game = Snake()

const initialState = {
  board: game.addSnakeHead(game.makeBoard()),
  head: INIT_HEAD,
  length: INIT_LENGTH,
  direction: INIT_DIRECTION,
  gameover: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICK: {
      let board = game.move(state.board, state.head, state.direction, state.length)
      if (Math.random() < 0.1) board = game.addCrumpet(board)
      const [row, col] = findNextHeadLocation([board.length, board[0].value.length], state.head, state.direction)
      const length = board[row].value[col].value - 1
      const gameover = game.getCellType(state.board, [row, col]) !== 'playable' ? true : state.gameover
      board = game.tick(board)
      if (gameover) board = state.board

      return Object.assign({}, state, { board, head: [row, col], length, gameover })
    }
    case CHANGE_DIRECTION: {
      if (!validDirectionChange(action.payload, state.direction)) return state
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
