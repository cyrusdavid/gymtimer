import React from 'react'
import { useDispatch } from 'react-redux'
import { setTime } from '../store/actions'

function Reset() {
  const dispatch = useDispatch()
  const resetTime = () => dispatch(setTime(0))
  return (
    <button type="button" className="border md:w-half time cursor-pointer bg-red-100 hover:bg-red-500 hover:text-white" onClick={resetTime}>Reset</button>
  )
}

export default Reset
