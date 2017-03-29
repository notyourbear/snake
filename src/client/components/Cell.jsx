import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'

const styles = {
  emptyCell: {
    width: '10px',
    height: '10px',
    border: '1px solid #d3d3d3',
    background: 'white',
    display: 'inline-block',
  },
}

styles.filledCell = Object.assign({}, styles.emptyCell, { background: 'black', border: '1px solid black' })

const Cell = ({ classes, value }) => {
  return (
    value === 0 ? <div className={classes.emptyCell} /> : <div className={classes.filledCell} />
  )
}

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default injectSheet(styles)(Cell)
