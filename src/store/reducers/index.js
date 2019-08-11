import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import modal from './modal-reducer'
import network from './network-reducer'

export default combineReducers({
  modal,
  network,
  form: formReducer,
})
