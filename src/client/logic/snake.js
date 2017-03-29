import { CRUMPET, GAME_HEIGHT, GAME_WIDTH, INIT_HEAD, INIT_LENGTH } from '../constants/board'
import { selectRandom, findAvailableSpaces, findNextHeadLocation } from '../../shared/utilFunctions'

const Snake = () => {
  const makeBoard = (height = GAME_HEIGHT, width = GAME_WIDTH, headLocation = INIT_HEAD, snakeLength = INIT_LENGTH) => {
    const board = []
    const row = []
    const [rIndex, cIndex] = headLocation

    for (let i = 0; i < width; i++) {
      row.push(0)
    }
    for (let i = 0; i < height; i++) {
      board.push(row)
    }

    return board.map((r, i) => {
      if (i !== rIndex) return r
      return r.map((cell, y) => {
        if (y !== cIndex) return cell
        return snakeLength
      })
    })
  }

  const move = (board, headLocation, direction, snakeLength) => {
    const boardDimensions = [board.length, board[0].length]
    const [rowIndex, cellIndex] = findNextHeadLocation(boardDimensions, headLocation, direction)

    return board.map((row, i) => {
      if (i !== rowIndex) return row
      return row.map((cell, y) => {
        if (y !== cellIndex) return cell
        return snakeLength + 1
      })
    })
  }

  const tick = (board) => {
    return board.map((row) => {
      return row.map((block) => {
        if (block === CRUMPET) return CRUMPET
        return block <= 1 ? 0 : block - 1
      })
    })
  }

  const addCrumpet = (board) => {
    const availableSpaces = findAvailableSpaces(board)
    const [rowIndex, blockIndex] = selectRandom(availableSpaces)

    return board.map((row, i) => {
      if (i !== rowIndex) return row
      return row.map((block, y) => {
        return (y !== blockIndex) ? block : CRUMPET
      })
    })
  }

  return {
    makeBoard,
    tick,
    addCrumpet,
    move,
  }
}

export default Snake
