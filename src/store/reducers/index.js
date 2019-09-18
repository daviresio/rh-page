import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import modal from './modal-reducer'
import network from './network-reducer'
import page from './page-reducer'

export default combineReducers({
  modal,
  network,
  page,
  form: formReducer,
})
