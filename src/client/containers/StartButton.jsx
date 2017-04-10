import { connect } from 'react-redux'

import { start, tick, reset } from '../actions'
import Button from '../components/Button'
import { TICK_LENGTH, INIT_HEAD } from '../constants/board'

const mapStateToProps = (state) => {
  const [initRow, initCol] = INIT_HEAD
  const [headRow, headCol] = state.game.head
  const label = initRow === headRow && initCol === headCol ? 'Start' : 'Restart'
  return {
    label,
    intervalId: state.interval,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (oldIntervalId) => {
      clearInterval(oldIntervalId)
      const intervalId = setInterval(() => {
        dispatch(tick())
      }, TICK_LENGTH)
      dispatch(reset())
      return dispatch(start(intervalId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
