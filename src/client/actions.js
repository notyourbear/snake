import { createAction } from 'redux-actions'

// eslint-disable-next-line import/prefer-default-export
export const TICK = 'TICK'
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
export const START = 'START'
export const STOP = 'STOP'
export const RESET = 'RESET'

export const tick = createAction(TICK)
export const changeDirection = createAction(CHANGE_DIRECTION)
export const start = createAction(START)
export const stop = createAction(STOP)
export const reset = createAction(RESET)
