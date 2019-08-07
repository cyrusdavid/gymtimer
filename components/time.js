import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function Time() {
  const time = useSelector(({ time }) => time)
  return (
    <div className="time font-normal">{moment.duration(time * 1000).format('mm:ss', {
      trim: false
    })}
    </div>
  )
}

export default Time
