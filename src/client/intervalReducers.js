import { START } from './actions'

const reducer = (state = null, action) => {
  switch (action.type) {
    case START: return action.payload
    default: return state
  }
}

export default reducer
