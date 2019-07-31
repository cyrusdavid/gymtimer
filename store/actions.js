import { SET_TIME, SET_DURATION } from './constants'

function setTime(time) {
  return {
    type: SET_TIME,
    payload: time
  }
}

function setDuration(duration, index) {
  return {
    type: SET_DURATION,
    payload: {
      duration, index
    }
  }
}

export { setTime, setDuration }
