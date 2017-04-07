import Snake from '../client/logic/snake'

const game = Snake()

const makeTestBoard = (cells) => {
  const board = game.makeBoard([2, 2])
  cells.forEach((cell) => {
    board[cell.id] = cell
  })

  return Object.assign({}, board)
}

export default makeTestBoard
