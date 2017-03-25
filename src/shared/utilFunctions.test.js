import { selectRandom } from './utilFunctions'

test('selectRandom', () => {
  const options = [2, 1, 3, 4]
  const choice = selectRandom(options)
  expect(options.includes(choice)).toBe(true)
})
