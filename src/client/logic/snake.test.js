/* eslint max-len: "off" */
import Snake from './snake'
import { CRUMPET } from '../constants/board'

const game = Snake()
const board = [
  { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 0 }] },
  { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
]

test('Snake.makeBoard', () => {
  const expected = [
    { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 0 }] },
    { id: 1, value: [{ id: 0, value: 0 }, { id: 1, value: 0 }] },
  ]
  expect(game.makeBoard([2, 2])).toEqual(expected)
})

test('Snake.addSnakeHead', () => {
  const expected = [
    { id: 0, value: [{ id: 0, value: 3 }, { id: 1, value: 0 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
  ]
  expect(game.addSnakeHead(board, [0, 0], 3)).toEqual(expected)
})

test('Snake.tick', () => {
  const expected = [
    { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 0 }] },
    { id: 1, value: [{ id: 0, value: 1 }, { id: 1, value: 2 }] },
  ]
  expect(game.tick(board)).toEqual(expected)
})

test('Snake.addCrumpet', () => {
  const tboard = [
    { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 1 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
  ]
  const expected = [
    { id: 0, value: [{ id: 0, value: CRUMPET }, { id: 1, value: 1 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
  ]
  expect(game.addCrumpet(tboard)).toEqual(expected)
})

test('Snake.move', () => {
  const head = [1, 1]
  const expected = [
    { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 4 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
  ]

  expect(game.move(board, head, 'up', 3)).toEqual(expected)
})

test('Snake.cellValue', () => {
  const test = [{ head: [0, 0], expected: 'crumpet' }, { head: [1, 1], expected: 'empty' }, { head: [0, 1], expected: 'snake' }]
  const tboard = [
    { id: 0, value: [{ id: 0, value: CRUMPET }, { id: 1, value: 1 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 0 }] },
  ]
  const correct = test.reduce((bool, t) => {
    if (!bool) return bool
    return game.cellValue(tboard, t.head) === t.expected
  }, true)

  expect(correct).toBe(true)
})
