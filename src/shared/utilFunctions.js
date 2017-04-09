// eslint-disable-next-line import/prefer-default-export
import { BOARD_DIMENSIONS } from '../client/constants/board'
import * as keyCodes from '../client/constants/keys'
import CellFactory from '../client/logic/cell'

const Cell = CellFactory()

export const selectRandom = (array) => {
  const length = array.length
  const place = Math.floor(((Math.random() * length) + 1) - 1)
  return array[place]
}

export const findAvailableSpaces = (board, type = 'single', dimensions = BOARD_DIMENSIONS) => {
  const values = Object.values(board)
  switch (type) {
    case 'star': {
      const [height, width] = dimensions
      return values.reduce((empties, cell) => {
        const [row, col] = cell.location
        switch (true) {
          case row < 1 || row > height - 2: return empties
          case col < 1 || col > width - 2: return empties
          default: {
            const checks = [[-1, 0], [0, -1], [0, 0], [0, 1], [1, 0]]
            const available = checks.reduce((options, check) => {
              if (options.isAvailable === false) return options
              const id = Cell.createId(row + check[0], col + check[1])
              const locations = options.locations.concat([board[id].location])
              const isAvailable = board[id].type !== 'snake' || board[id].type !== 'barrier'
              return { isAvailable, locations }
            }, { locations: [], isAvailable: true })

            return !available.isAvailable ? empties : empties.concat([available.locations])
          }
        }
      }, [])
    }
    default: {
      return values.reduce((empties, cell) => {
        return cell.type === 'empty' ? empties.concat([cell.location]) : empties
      }, [])
    }
  }
}

export const findNextHeadLocation = (locationOfHead, direction, dimensions = BOARD_DIMENSIONS) => {
  const [height, width] = dimensions
  let [row, col] = locationOfHead
  if (direction === 'up') row = row === 0 ? height - 1 : row - 1
  if (direction === 'down') row = row === height - 1 ? 0 : row + 1
  if (direction === 'left') col = col === 0 ? width - 1 : col - 1
  if (direction === 'right') col = col === width - 1 ? 0 : col + 1
  return { id: Cell.createId(row, col), location: [row, col] }
}

export const keyCodeToDirection = (keyCode) => {
  if (keyCode === keyCodes.LEFT) return 'left'
  if (keyCode === keyCodes.RIGHT) return 'right'
  if (keyCode === keyCodes.UP) return 'up'
  if (keyCode === keyCodes.DOWN) return 'down'
  return keyCode
}

export const validDirectionChange = (keyCode, currentDirection) => {
  switch (true) {
    case keyCodeToDirection(keyCode) === 'left' && currentDirection === 'right':
    case keyCodeToDirection(keyCode) === 'down' && currentDirection === 'up':
    case keyCodeToDirection(keyCode) === 'right' && currentDirection === 'left':
    case keyCodeToDirection(keyCode) === 'up' && currentDirection === 'down':
      return false
    default: return true
  }
}
