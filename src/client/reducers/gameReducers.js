import Snake from '../logic/snake'
import { INIT_HEAD, INIT_LENGTH, INIT_DIRECTION, BARRIER, SNAKE } from '../constants/board'
import { TICK, CHANGE_DIRECTION, RESET } from '../actions'
import { keyCodeToDirection, findNextHeadLocation, validDirectionChange } from '../logic/utilFunctions'
import * as keyCodes from '../constants/keys'

const Game = Snake()

const initialState = {
  board: Game.addSnakeHead(Game.makeBoard()),
  head: INIT_HEAD,
  length: INIT_LENGTH,
  direction: INIT_DIRECTION,
  gameover: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET: {
      return Object.assign({}, initialState, { head: state.head, direction: state.direction })
    }
    case TICK: {
      const nextHead = findNextHeadLocation(state.head, state.direction)
      const nextHeadCellType = state.board[nextHead.id].type
      const gameover = (nextHeadCellType === SNAKE || nextHeadCellType === BARRIER) ? true : state.gameover

      let board = Game.move(state.board, state.head, state.direction, state.length)
      const length = board[nextHead.id].value - 1
      if (Math.random() < 0.1) board = Game.addCrumpet(board)
      if (length > 8 && Math.random() < 0.01) board = Game.addBarrier(board, 'star')
      board = Game.tick(board)
      if (gameover) board = state.board

      return Object.assign({}, state, { board, length, gameover, head: nextHead.location })
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
