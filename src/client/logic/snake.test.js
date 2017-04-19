/* eslint max-len: "off" */
import Snake from './snake'
import { CRUMPET } from '../constants/board'
import CellFactory from './cell'
import makeTestBoard from './testFunctions'

const Cell = CellFactory()
const game = Snake()

const board = game.makeBoard([2, 2])

test('Snake.makeBoard', () => {
  const expected = makeTestBoard([])
  expect(game.makeBoard([2, 2])).toEqual(expected)
})

test('Snake.addSnakeHead', () => {
  const head = Cell.make(Cell.createId(0, 0), [0, 0], 'snake', 3)
  const expected = makeTestBoard([head])
  expect(game.addSnakeHead(board, [0, 0], 3)).toEqual(expected)
})

test('Snake.tick', () => {
  const one = Cell.make(Cell.createId(0, 0), [0, 0], 'snake', 3)
  const two = Cell.make(Cell.createId(0, 0), [0, 0], 'snake', 2)
  const expected = makeTestBoard([two])

  expect(game.tick(makeTestBoard([one]))).toEqual(expected)
})

test('Snake.addCrumpet', () => {
  const crumpet = Cell.make(Cell.createId(0, 0), [0, 0], CRUMPET, CRUMPET)
  const crumpet2 = Cell.make(Cell.createId(1, 1), [1, 1], CRUMPET, CRUMPET)
  const one = Cell.make(Cell.createId(0, 1), [0, 1], 'snake', 3)
  const two = Cell.make(Cell.createId(1, 0), [1, 0], 'snake', 2)
  const expected = makeTestBoard([crumpet, one, two, crumpet2])

  const tboard = makeTestBoard([crumpet, one, two])

  expect(game.addCrumpet(tboard)).toEqual(expected)
})

test('Snake.move', () => {
  const before = Cell.make(Cell.createId(0, 1), [0, 1], 'snake', 3)
  const after = Cell.make(Cell.createId(0, 0), [0, 0], 'snake', 4)
  const expected = makeTestBoard([after, before])

  expect(game.move(makeTestBoard([before]), [0, 1], 'left', 3)).toEqual(expected)
})
