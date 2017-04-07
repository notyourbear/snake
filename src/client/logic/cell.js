const CellFactory = () => {
  const make = (id, location, type = 'empty', value = 0) => {
    return {
      id,
      location,
      type,
      value,
    }
  }

  const createId = (rowIndex, colIndex) => {
    return `${rowIndex}-${colIndex}`
  }

  return {
    make,
    createId,
  }
}

export default CellFactory
