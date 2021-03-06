import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Row from '../components/Row'

const rowSelector = (state, props) => {
  const cells = Object.values(state.game.board)
  return cells.filter((cell) => {
    return cell.location[0] === props.id
  })
}

const filteredRowSelector = createSelector(rowSelector, (row) => {
  return row.reduce((acc, cell) => {
    return acc.concat({ id: cell.id, type: cell.type, value: cell.value })
  }, [])
})

const mapStateToProps = (state, props) => {
  return {
    row: filteredRowSelector(state, props),
  }
}

export default connect(mapStateToProps, null)(Row)
