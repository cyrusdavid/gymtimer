import React from 'react'
import { useSelector } from 'react-redux'
import Duration from './duration'

function DurationList() {
  const durations = useSelector(({ durations }) => durations)
  return (
    <>
      {durations.map(duration => (
        <Duration key={duration} duration={duration}/>
      ))}
    </>
  )
}

export default DurationList
