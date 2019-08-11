import { CRIAR_CONTA_SUCCESS, LOGIN_SUCCESS } from "../actions/action-types"

const INITIAL_STATE = {
  loading: false,
  token: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CRIAR_CONTA_SUCCESS:
      return {...state, token: action.payload}
    case LOGIN_SUCCESS:
      return {...state, token: action.payload}
    default:
      return state
  }
}
