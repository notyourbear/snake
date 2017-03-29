import Snake from './snake'
import { CRUMPET } from '../constants/board'

const game = Snake()

test('Snake.makeBoard', () => {
  expect(game.makeBoard(3, 3, [0, 0], 1)).toEqual([[1, 0, 0], [0, 0, 0], [0, 0, 0]])
})

test('Snake.tick', () => {
  const board = [[0, 1], [2, 3]]
  const expected = [[0, 0], [1, 2]]
  expect(game.tick(board)).toEqual(expected)
})

test('Snake.addCrumpet', () => {
  const board = [[0, 1], [2, 3]]
  const expected = [[CRUMPET, 1], [2, 3]]
  expect(game.addCrumpet(board)).toEqual(expected)
})

test('Snake.move', () => {
  const board = [[0, 3], [2, 1]]
  const expected = [[4, 3], [2, 1]]
  const head = [0, 1]
  expect(game.move(board, head, 'left', 3)).toEqual(expected)
})
