import * as util from '../utilFunctions'
import { makeTestBoard } from './testFunctions'
import CellFactory from '../cell'

const Cell = CellFactory()

test('selectRandom', () => {
  const options = [2, 1, 3, 4]
  const choice = util.selectRandom(options)
  expect(options.includes(choice)).toBe(true)
})

test('findAvailableSpaces', () => {
  const cell = Cell.make(Cell.createId(0, 0), [0, 0], 'snake', 3)
  const board = makeTestBoard([cell])
  const largerBoard = makeTestBoard([], [3, 3])
  expect(util.findAvailableSpaces(board)).toEqual([[0, 1], [1, 0], [1, 1]])
  expect(util.findAvailableSpaces(largerBoard, 'star', [3, 3])).toEqual([[[0, 1], [1, 0], [1, 1], [1, 2], [2, 1]]])
})

test('findNextHeadLocation', () => {
  const dimensions = [4, 4]
  const head = [0, 0]
  expect(util.findNextHeadLocation(head, 'left', dimensions)).toEqual({ id: Cell.createId(0, 3), location: [0, 3] })
  expect(util.findNextHeadLocation(head, 'right', dimensions)).toEqual({ id: Cell.createId(0, 1), location: [0, 1] })
  expect(util.findNextHeadLocation(head, 'up', dimensions)).toEqual({ id: Cell.createId(3, 0), location: [3, 0] })
  expect(util.findNextHeadLocation(head, 'down', dimensions)).toEqual({ id: Cell.createId(1, 0), location: [1, 0] })
})

test('keyCodeToDirection', () => {
  const keyCodes = [
    { val: 'left', key: 37 },
    { val: 'right', key: 39 },
    { val: 'up', key: 38 },
    { val: 'down', key: 40 },
    { val: 41, key: 41 },
  ]
  const check = keyCodes.reduce((bool, code) => {
    if (!bool) return bool
    return util.keyCodeToDirection(code.key) === code.val
  }, true)
  expect(check).toBe(true)
})

test('validDirectionChange', () => {
  const keyCodes = [
    { val: 'left', key: 37, opp: 'right' },
    { val: 'right', key: 39, opp: 'left' },
    { val: 'up', key: 38, opp: 'down' },
    { val: 'down', key: 40, opp: 'up' },
  ]
  const check = keyCodes.reduce((bool, code) => {
    if (bool === true) return bool
    return util.validDirectionChange(code.key, code.opp)
  }, false)
  expect(check).toBe(false)
  expect(util.validDirectionChange(37, 'up')).toBe(true)
})
