import { applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import modal from './modal-reducer'
import network from './network-reducer'

const middlewares = [thunk, ]

export default combineReducers({
  modal,
  network,
  form: formReducer,
}, applyMiddleware(...middlewares))
