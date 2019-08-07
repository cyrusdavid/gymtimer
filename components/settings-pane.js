import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import { setDuration } from '../store/actions'

function SettingsPane() {
  const [isSettingsShown, hideOrShowSettings] = useState(false)
  const dispatch = useDispatch()
  const onChange = index => t => {
    dispatch(setDuration(moment.duration(t.format('00:mm:ss')).asSeconds(), index))
  }

  const durations = useSelector(({ durations }) => durations)
  const onClickBtnHide = () => hideOrShowSettings(false)
  const onClickBtnShow = () => hideOrShowSettings(true)

  return (
    <>
      <div className="text-center py-2">
        <button type="button" className="uppercase text-sm border-b" onClick={onClickBtnShow}>Settings</button>
      </div>
      <div className={`settingsPane ${isSettingsShown && 'settingsPane-visible'}`}>
        <div className="border flex-1">
          <h2 className="uppercase text-lg text-center my-2">Settings</h2>
          <div className="flex flex-wrap">
            {durations.map((duration, index) => (
              <div key={duration} className="w-half text-center my-4">
                <TimePicker
                  format="mm:ss"
                  value={moment(moment.duration(duration * 1000).format('mm:ss', { trim: false }), 'mm:ss')}
                  showHour={false}
                  allowEmpty={false}
                  onChange={onChange(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center py-2">
          <button type="button" className="uppercase text-sm border-b" onClick={onClickBtnHide}>Close</button>
        </div>
      </div>
    </>
  )
}

export default SettingsPane
