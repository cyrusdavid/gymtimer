import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Sound from 'react-sound'

function Time() {
  const time = useSelector(({ time }) => time)
  let shortPlayStatus = 'STOPPED'
  let longPlayStatus = 'STOPPED'

  if (time === 0) {
    longPlayStatus = 'PLAYING'
    shortPlayStatus = 'STOPPED'
  } else if (time <= 3) {
    shortPlayStatus = 'PLAYING'
    longPlayStatus = 'STOPPED'
  } else {
    longPlayStatus = 'STOPPED'
    shortPlayStatus = 'STOPPED'
  }

  return (
    <div className="time font-normal">
      {moment.duration(time * 1000).format('mm:ss', {
        trim: false
      })}
      <Sound autoLoad url="/static/audio/long.mp3" playStatus={longPlayStatus}/>
      <Sound autoLoad url="/static/audio/short.mp3" playStatus={shortPlayStatus}/>
    </div>
  )
}

export default Time
