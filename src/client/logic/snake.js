import { CRUMPET, BOARD_DIMENSIONS, INIT_HEAD, INIT_LENGTH } from '../constants/board'
import { selectRandom, findAvailableSpaces, findNextHeadLocation } from '../../shared/utilFunctions'

const Snake = () => {
  const makeBoard = (dimensions = BOARD_DIMENSIONS) => {
    const board = []
    const row = []
    const [height, width] = dimensions

    for (let i = 0; i < width; i++) {
      row.push({ id: i, value: 0 })
    }
    for (let i = 0; i < height; i++) {
      board.push({ id: i, value: row })
    }
    return board
  }

  const cellValue = (board, headLocation) => {
    const [row, col] = headLocation
    const val = board[row].value[col].value
    switch (val) {
      case CRUMPET: return 'crumpet'
      case 0: return 'empty'
      default: return 'snake'
    }
  }


  const addSnakeHead = (board, headLocation = INIT_HEAD, snakeLength = INIT_LENGTH) => {
    const [rIndex, cIndex] = headLocation
    return board.map((row, i) => {
      if (i !== rIndex) return row
      const value = row.value.map((cell, y) => {
        if (y !== cIndex) return cell
        return Object.assign({}, cell, { value: snakeLength })
      })
      return Object.assign({}, row, { value })
    })
  }

  const move = (board, headLocation, direction, snakeLength) => {
    const boardDimensions = [board.length, board[0].value.length]
    const [rowIndex, cellIndex] = findNextHeadLocation(boardDimensions, headLocation, direction)
    return board.map((row, i) => {
      if (i !== rowIndex) return row
      const value = row.value.map((cell, y) => {
        if (y !== cellIndex) return cell
        const val = cellValue(board, [rowIndex, cellIndex]) === 'crumpet' ? snakeLength + 2 : snakeLength + 1
        return Object.assign({}, cell, { value: val })
      })
      return Object.assign({}, row, { value })
    })
  }

  const tick = (board) => {
    return board.map((row) => {
      const value = row.value.map((cell) => {
        if (cell.value === CRUMPET) return cell
        if (cell.value <= 1) return Object.assign({}, cell, { value: 0 })
        return Object.assign({}, cell, { value: cell.value - 1 })
      })
      return Object.assign({}, row, { value })
    })
  }

  const addCrumpet = (board) => {
    const availableSpaces = findAvailableSpaces(board)
    const [rowIndex, cellIndex] = selectRandom(availableSpaces)

    return board.map((row, i) => {
      if (i !== rowIndex) return row
      const value = row.value.map((cell, y) => {
        return (y !== cellIndex) ? cell : Object.assign({}, cell, { value: CRUMPET })
      })
      return Object.assign({}, row, { value })
    })
  }

  return {
    makeBoard,
    tick,
    addCrumpet,
    move,
    addSnakeHead,
    cellValue,
  }
}

export default Snake
