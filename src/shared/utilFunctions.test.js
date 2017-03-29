import { selectRandom, findAvailableSpaces, findNextHeadLocation } from './utilFunctions'

test('selectRandom', () => {
  const options = [2, 1, 3, 4]
  const choice = selectRandom(options)
  expect(options.includes(choice)).toBe(true)
})

test('findAvailableSpaces', () => {
  const board = [
    { id: 0, value: [{ id: 0, value: 0 }, { id: 1, value: 0 }] },
    { id: 1, value: [{ id: 0, value: 2 }, { id: 1, value: 3 }] },
  ]
  expect(findAvailableSpaces(board)).toEqual([[0, 0], [0, 1]])
})

test('findNextHeadLocation', () => {
  const dimensions = [4, 4]
  const head = [0, 0]
  expect(findNextHeadLocation(dimensions, head, 'left')).toEqual([0, 3])
  expect(findNextHeadLocation(dimensions, head, 'right')).toEqual([0, 1])
  expect(findNextHeadLocation(dimensions, head, 'up')).toEqual([3, 0])
  expect(findNextHeadLocation(dimensions, head, 'down')).toEqual([1, 0])
})
