import { createStore as createReduxStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducer from './reducer'

function createStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createReduxStore(reducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(sagas)

  return store
}

export default createStore
