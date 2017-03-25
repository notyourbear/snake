import Snake from './snake'
import { CRUMPET } from '../constants/board'

const game = Snake()

test('Snake.makeBoard', () => {
  expect(game.makeBoard(3, 3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
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
