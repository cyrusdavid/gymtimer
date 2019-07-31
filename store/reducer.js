import { combineReducers } from 'redux'
import { RESET_TIME, SET_TIME, DECREMENT_TIME, SET_DURATION } from './constants'

function timeReducer(state = 0, action) {
  switch (action.type) {
    case DECREMENT_TIME:
      return state - 1
    case RESET_TIME:
      return 0
    case SET_TIME:
      return action.payload
    default:
      return state
  }
}

const initialDurations = [30, 60, 120, 180, 300]

function durationsReducer(state = initialDurations, action) {
  switch (action.type) {
    case SET_DURATION: {
      const { index, duration } = action.payload
      const durations = [...state]
      durations.splice(index, 1, duration)

      return durations
    }

    default:
      return state
  }
}

export default combineReducers({
  time: timeReducer,
  durations: durationsReducer
})
