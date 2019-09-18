import { SHOW_LOGIN_FORM, SHOW_RECOVER_PASSWORD_FORM } from "../actions/action-types"

const INITIAL_STATE = {
  showLogin: true,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOGIN_FORM:
      return {...state, showLogin: true}
    case SHOW_RECOVER_PASSWORD_FORM:
      return {...state, showLogin: false}
    default:
      return state
  }
}
