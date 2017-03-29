import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

const style = {
  background: 'white',
  color: 'black',
  borderRadius: '25px',
  border: '1px solid black',
}

const Button = ({ classes, label, intervalId, handleClick }) => {
  return (
    <button style={classes} onClick={handleClick.bind(this, intervalId)}>{label}</button>
  )
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  intervalId: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default injectSheet(style)(Button)
