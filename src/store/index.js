import React from 'react'
import { applyMiddleware, compose, createStore } from "redux"
import reducers from './reducers'
import thunk from "redux-thunk"
import { Provider } from "react-redux"

const middlewares = [thunk, ]

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store  = () => createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))

export default ({element}) => <Provider store={store()}>{element}</Provider>
