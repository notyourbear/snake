import { EMPTY } from '../constants/board'

const CellFactory = () => {
  const make = (id, location, type = EMPTY, value = 0) => {
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
