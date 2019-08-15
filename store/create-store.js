import { createStore as createReduxStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducer from './reducer'

function createStore(preloadedState) {
  preloadedState = preloadedState || void 0
  const sagaMiddleware = createSagaMiddleware()
  const store = createReduxStore(reducer, preloadedState, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(sagas)

  return store
}

export default createStore
