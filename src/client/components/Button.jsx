import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

import * as colors from '../../shared/colors'

const styles = {
  button: {
    background: `${colors.BACKGROUND}`,
    color: `${colors.FONT}`,
    border: `4px solid ${colors.BORDER}`,
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '2px',
    marginBottom: '0',
    lineHeight: '0',
    borderRadius: '0',
  },
}

const Button = ({ classes, label, intervalId, handleClick }) => {
  return (
    <button className={classes.button} onClick={handleClick.bind(this, intervalId)}>{label}</button>
  )
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  intervalId: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default injectSheet(styles)(Button)
