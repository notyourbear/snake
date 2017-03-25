import { CRUMPET, GAME_HEIGHT, GAME_WIDTH } from '../constants/board'
import { selectRandom, findAvailableSpaces } from '../../shared/utilFunctions'

const Snake = () => {
  const makeBoard = (height = GAME_HEIGHT, width = GAME_WIDTH) => {
    const board = []
    const row = []
    for (let i = 0; i < width; i++) {
      row.push(0)
    }
    for (let i = 0; i < height; i++) {
      board.push(row)
    }
    return board
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
  }
}

export default Snake
