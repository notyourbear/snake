// eslint-disable-next-line import/prefer-default-export
export const selectRandom = (array) => {
  const length = array.length
  const place = Math.floor(((Math.random() * length) + 1) - 1)
  return array[place]
}

export const findAvailableSpaces = (board) => {
  return board.reduce((empties, row, i) => {
    const blocks = row.reduce((emptyBlocks, block, y) => {
      return block === 0 ? emptyBlocks.concat(y) : emptyBlocks
    }, [])

    return empties.concat(blocks.map((y) => {
      return [i, y]
    }))
  }, [])
}
