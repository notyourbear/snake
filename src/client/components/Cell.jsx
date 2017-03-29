import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  emptyCell: {
    width: '6px',
    height: '6px',
    border: '1px solid #d3d3d3',
    background: 'white',
  },
}

styles.fullCell = Object.assign({}, styles.emptyCell, { background: 'black' })

const Cell = (classes, { value }) => {
  return (
    value === 0 ? <div className={classes.emptyCell} /> : <div className={classes.filledCell} />
  )
}

export default injectSheet(styles)(Cell)
