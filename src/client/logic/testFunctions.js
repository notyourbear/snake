import Snake from './snake'

const game = Snake()

const makeTestBoard = (cells, dimensions = [2, 2]) => {
  const board = game.makeBoard(dimensions)
  cells.forEach((cell) => {
    board[cell.id] = cell
  })

  return Object.assign({}, board)
}

export default makeTestBoard
