import { CHANGE_MODAL_VISIBILITY } from "../actions/action-types"

const INITIAL_STATE = {
  cadastro: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CHANGE_MODAL_VISIBILITY:
      return {...state, [action.payload.target]: action.payload.value}

    default:
      return state
  }
}
