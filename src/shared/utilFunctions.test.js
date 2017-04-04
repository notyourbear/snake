import * as util from './utilFunctions'

test('selectRandom', () => {
  const options = [2, 1, 3, 4]
  const choice = util.selectRandom(options)
  expect(options.includes(choice)).toBe(true)
})

test('findAvailableSpaces', () => {
  const board = [
    { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 0 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
  ]
  expect(util.findAvailableSpaces(board)).toEqual([[0, 0], [0, 1]])
})

test('findNextHeadLocation', () => {
  const dimensions = [4, 4]
  const head = [0, 0]
  expect(util.findNextHeadLocation(dimensions, head, 'left')).toEqual([0, 3])
  expect(util.findNextHeadLocation(dimensions, head, 'right')).toEqual([0, 1])
  expect(util.findNextHeadLocation(dimensions, head, 'up')).toEqual([3, 0])
  expect(util.findNextHeadLocation(dimensions, head, 'down')).toEqual([1, 0])
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
