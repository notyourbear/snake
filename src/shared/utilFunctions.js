import { GAME_HEIGHT, GAME_WIDTH } from '../client/constants/board'

// eslint-disable-next-line import/prefer-default-export
export const selectRandom = (array) => {
  const length = array.length
  const place = Math.floor(((Math.random() * length) + 1) - 1)
  return array[place]
}

export const findAvailableSpaces = (board) => {
  return board.reduce((empties, row, i) => {
    const blocks = row.reduce((emptyBlocks, block, y) => {
      return block === 0 ? emptyBlocks.concat(y) : emptyBlocks
    }, [])

    return empties.concat(blocks.map((y) => {
      return [i, y]
    }))
  }, [])
}

const dmnsns = [GAME_HEIGHT, GAME_WIDTH]
export const findNextHeadLocation = (boardDimenions = dmnsns, locationOfHead, direction) => {
  const [height, width] = boardDimenions
  let [row, col] = locationOfHead

  if (direction === 'up') row = row === 0 ? height - 1 : row - 1
  if (direction === 'down') row = row === height - 1 ? 0 : row + 1
  if (direction === 'left') col = col === 0 ? width - 1 : col - 1
  if (direction === 'right') col = col === width - 1 ? 0 : col + 1
  return [row, col]
}
