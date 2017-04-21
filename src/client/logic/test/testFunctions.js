import Snake from '../snake'

const game = Snake()

// eslint-disable-next-line import/prefer-default-export
export const makeTestBoard = (cells, dimensions = [2, 2]) => {
  const board = game.makeBoard(dimensions)
  cells.forEach((cell) => {
    board[cell.id] = cell
  })

  return Object.assign({}, board)
}

export const findSpaces = (board, type) => {
  return (Object.values(board)).reduce((acc, cell) => {
    return (cell.type === type) ? acc.concat([cell.location]) : acc
  }, [])
}
