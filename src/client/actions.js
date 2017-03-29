import { createAction } from 'redux-actions'

// eslint-disable-next-line import/prefer-default-export
export const TICK = 'TICK'
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION'

export const tick = createAction(TICK)
export const changeDirection = createAction(CHANGE_DIRECTION)
