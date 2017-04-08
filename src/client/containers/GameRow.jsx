import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Row from '../components/Row'

const rowSelector = (state, props) => {
  const cells = Object.values(state.game.board)
  return cells.filter((cell) => {
    return cell.id[0] === props.id.toString()
  })
}

const filteredRowSelector = createSelector(rowSelector, (row) => {
  return row.reduce((acc, cell) => {
    return acc.concat({ id: cell.id, type: cell.type })
  }, [])
})

const mapStateToProps = (state, props) => {
  return {
    row: filteredRowSelector(state, props),
  }
}

export default connect(mapStateToProps, null)(Row)
