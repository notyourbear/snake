// eslint-disable-next-line import/prefer-default-export
import { BOARD_DIMENSIONS } from '../client/constants/board'
import * as keyCodes from '../client/constants/keys'

export const selectRandom = (array) => {
  const length = array.length
  const place = Math.floor(((Math.random() * length) + 1) - 1)
  return array[place]
}

export const findAvailableSpaces = (board) => {
  return board.reduce((empties, row, rowIndex) => {
    const cells = row.value.reduce((emptyCells, cell, cellIndex) => {
      return cell.value === 0 ? emptyCells.concat(cellIndex) : emptyCells
    }, [])

    return empties.concat(cells.map((cellIndex) => {
      return [rowIndex, cellIndex]
    }))
  }, [])
}

export const findNextHeadLocation = (dimensions = BOARD_DIMENSIONS, locationOfHead, direction) => {
  const [height, width] = dimensions
  let [row, col] = locationOfHead

  if (direction === 'up') row = row === 0 ? height - 1 : row - 1
  if (direction === 'down') row = row === height - 1 ? 0 : row + 1
  if (direction === 'left') col = col === 0 ? width - 1 : col - 1
  if (direction === 'right') col = col === width - 1 ? 0 : col + 1
  return [row, col]
}

export const keyCodeToDirection = (keyCode) => {
  if (keyCode === keyCodes.LEFT) return 'left'
  if (keyCode === keyCodes.RIGHT) return 'right'
  if (keyCode === keyCodes.UP) return 'up'
  if (keyCode === keyCodes.DOWN) return 'down'
  return keyCode
}
