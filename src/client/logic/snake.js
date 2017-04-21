import { CRUMPET, PREBARRIER, EMPTY, BARRIER,
  BARRIER_TIMER, BOARD_DIMENSIONS,
  INIT_HEAD, INIT_LENGTH, SNAKE } from '../constants/board'
import { selectRandom, findAvailableSpaces, findNextHeadLocation } from './utilFunctions'
import CellFactory from './cell'

const Cell = CellFactory()

const Snake = () => {
  const makeBoard = (dimensions = BOARD_DIMENSIONS) => {
    const board = {}
    const [height, width] = dimensions

    for (let i = 0; i < height; i++) {
      for (let y = 0; y < width; y++) {
        const id = Cell.createId(i, y)
        board[id] = Cell.make(id, [i, y])
      }
    }
    return board
  }

  const addSnakeHead = (board, headLocation = INIT_HEAD, snakeLength = INIT_LENGTH) => {
    const [rIndex, cIndex] = headLocation
    const id = Cell.createId(rIndex, cIndex)
    const snakehead = Cell.make(id, headLocation, SNAKE, snakeLength)
    const newBoard = Object.assign({}, board)
    newBoard[id] = snakehead

    return newBoard
  }

  const move = (board, headLocation, direction, snakeLength) => {
    const nextHead = findNextHeadLocation(headLocation, direction)
    const value = board[nextHead.id].type === CRUMPET ? snakeLength + 2 : snakeLength + 1
    const cell = Cell.make(nextHead.id, nextHead.location, SNAKE, value)
    const newBoard = Object.assign({}, board)
    newBoard[nextHead.id] = cell

    return newBoard
  }

  const tick = (board) => {
    const values = Object.values(board)
    const newBoard = Object.assign({}, board)
    values.forEach((cell) => {
      const value = cell.value <= 1 ? 0 : cell.value - 1
      let type = cell.type
      if (value === 0) {
        if (cell.type === SNAKE) type = EMPTY
        if (cell.type === PREBARRIER) type = BARRIER
      }

      const newCell = Cell.make(cell.id, cell.location, type, value)
      newBoard[cell.id] = Object.assign(newCell)
    })

    return Object.assign({}, newBoard)
  }

  const addCrumpet = (board) => {
    const availableSpaces = findAvailableSpaces(board)
    const [rowIndex, colIndex] = selectRandom(availableSpaces)
    const id = Cell.createId(rowIndex, colIndex)
    const cell = Cell.make(id, [rowIndex, colIndex], CRUMPET, CRUMPET)
    const newBoard = Object.assign({}, board)
    newBoard[id] = cell

    return newBoard
  }

  const addBarrier = (board, type = 'star') => {
    const availableSpaces = findAvailableSpaces(board, type)
    const locations = selectRandom(availableSpaces)
    const newBoard = Object.assign({}, board)
    locations.forEach((location) => {
      const [rowIndex, colIndex] = location
      const id = Cell.createId(rowIndex, colIndex)
      const cell = Cell.make(id, location, PREBARRIER, BARRIER_TIMER)
      newBoard[id] = cell
    })

    return newBoard
  }

  return {
    makeBoard,
    tick,
    addCrumpet,
    move,
    addSnakeHead,
    addBarrier,
  }
}

export default Snake
