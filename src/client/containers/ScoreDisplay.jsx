import { connect } from 'react-redux'

import Display from '../components/Display'

const lengthSelector = (state) => {
  return state.game.length
}

const mapStateToProps = (state) => {
  return {
    snakeLength: lengthSelector(state),
  }
}

export default connect(mapStateToProps, null)(Display)
