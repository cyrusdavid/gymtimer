import { delay, put, takeLatest, select, takeEvery, call } from 'redux-saga/effects'
import store from 'store2'
import { shortSound, longSound } from '../sound'
import { SET_TIME, DECREMENT_TIME, SET_DURATION, STORE_KEY } from './constants'

function * playSound() {
  const time = yield select(({ time }) => time)

  if (time === 0) {
    yield call([longSound, 'play'])
  } else if (time <= 3) {
    yield call([shortSound, 'play'])
  }
}

function * decrementTime(action) {
  for (let i = action.payload; i > 0; i--) {
    yield delay(1000)
    yield put({ type: DECREMENT_TIME })
  }
}

function * updateStorage(action) {
  const state = yield select(({ durations }) => durations)
  const { index, duration } = action.payload
  const durations = [...state]
  durations.splice(index, 1, duration)
  yield call(store, STORE_KEY, { durations })
}

function * saga() {
  yield takeLatest(SET_TIME, decrementTime)
  yield takeEvery(DECREMENT_TIME, playSound)
  yield takeEvery(SET_DURATION, updateStorage)
}

export default saga
