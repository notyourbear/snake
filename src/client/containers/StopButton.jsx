import { connect } from 'react-redux'
import Button from '../components/Button'

const mapStateToProps = (state) => {
  return {
    label: 'Stop',
    intervalId: state.interval,
  }
}

const mapDispatchToProps = () => {
  return {
    handleClick: (oldIntervalId) => {
      clearInterval(oldIntervalId)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
