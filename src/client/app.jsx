import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

import Gameboard from './containers/Gameboard'
import Header from './components/Header'
import { changeDirection } from './actions'
import * as colors from '../shared/colors'


const styles = {
  container: {
    marginTop: '50px',
    '&:focus': {
      outline: 0,
      border: colors.BACKGROUND,
    },
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeystroke: e => dispatch(changeDirection(e.keyCode)),
  }
}


const App = ({ classes, handleKeystroke }) => {
  const containerClass = `${classes.container} container`

  return (
    <div tabIndex={0} onKeyDown={handleKeystroke} className={containerClass}>
      <div className="row">
        <div className="two columns">&nbsp;</div>
        <div className="eight columns">
          <Header />
        </div>
        <div className="two columns">&nbsp;</div>
      </div>
      <div className="row">
        <div className="two columns">&nbsp;</div>
        <Gameboard />
        <div className="two columns">&nbsp;</div>
      </div>
    </div>
  )
}

App.propTypes = {
  handleKeystroke: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default connect(null, mapDispatchToProps)(injectSheet(styles)(App))
