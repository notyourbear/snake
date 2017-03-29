import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Row from '../components/Row'

const rowSelector = (state, props) => {
  return state.game.board[props.id]
}

const filteredRowSelector = createSelector(rowSelector, row => row.value)

const mapStateToProps = (state, props) => {
  return {
    row: filteredRowSelector(state, props),
  }
}

export default connect(mapStateToProps, null)(Row)
