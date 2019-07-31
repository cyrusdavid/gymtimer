import { delay, put, takeLatest } from 'redux-saga/effects'
import { SET_TIME, DECREMENT_TIME } from './constants'

function * decrementTime(action) {
  if (!(action.payload > 0)) {
    return
  }

  while (true) {
    yield delay(1000)
    yield put({ type: DECREMENT_TIME })
  }
}

function * saga() {
  yield takeLatest(SET_TIME, decrementTime)
}

export default saga
