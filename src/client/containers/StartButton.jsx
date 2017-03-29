import { connect } from 'react-redux'

import { start, tick } from '../actions'
import Button from '../components/Button'
import TICK_LENGTH from '../constants/board'

const mapStateToProps = (state) => {
  return {
    label: 'Start',
    intervalId: state.game.intervalId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (oldIntervalId) => {
      clearInterval(oldIntervalId)
      const intervalId = setInterval(() => {
        dispatch(tick())
      }, TICK_LENGTH)
      return dispatch(start(intervalId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
