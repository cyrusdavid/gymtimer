import { delay, put, takeLatest } from 'redux-saga/effects'
import { SET_TIME, DECREMENT_TIME } from './constants'

function * decrementTime(action) {
  for (let i = action.payload; i > 0; i--) {
    yield delay(1000)
    yield put({ type: DECREMENT_TIME })
  }
}

function * saga() {
  yield takeLatest(SET_TIME, decrementTime)
}

export default saga
