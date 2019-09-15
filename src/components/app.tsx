import React, {useReducer, useEffect} from 'react'
import {Howl} from 'howler'
import * as audioContextTimers from 'audio-context-timers'
import {formatSeconds} from '../utils'
import Duration from './duration'

const shortBeep = new Howl({
	src: '/audio/short.mp3'
})
const longBeep = new Howl({
	src: '/audio/long.mp3'
})
enum actions {
	SET_TIME = 'SET_TIME',
	DECREMENT = 'DECREMENT'
}
let timeout: number

const App: React.FunctionComponent<{durations: number[]}> = ({durations}) => {
	const reducer: React.Reducer<{time: number}, {type: string; time?: number}> = (state, action) => {
		switch (action.type) {
			case actions.SET_TIME:
				audioContextTimers.clearTimeout(timeout)
				return {time: action.time || 0}
			case actions.DECREMENT: {
				const newTime = state.time - 1
				if (newTime === 0) {
					longBeep.play()
				} else if (newTime < 4) {
					shortBeep.play()
				}

				return {time: newTime}
			}

			default:
				throw new Error('Oops!')
		}
	}

	const [state, dispatch] = useReducer(reducer, {time: 0})
	const {time} = state

	useEffect(() => {
		if (time) {
			timeout = audioContextTimers.setTimeout(() => dispatch({type: actions.DECREMENT}), 1000)
		}
	}, [time])

	return (
		<div className="p-2 h-full lg:flex lg:items-center">
			<div className="border border-gray-200 h-full mx-auto grid">
				<div className="time">{formatSeconds(time)}</div>
				{durations.map(duration => (
					<Duration key={duration} duration={duration} onClick={() => {
						dispatch({type: actions.SET_TIME, time: duration})
					}}/>
				))}
				<Duration onClick={() => {
					dispatch({type: actions.SET_TIME, time: 0})
				}}
				>
					Reset
				</Duration>
			</div>
		</div>
	)
}

export default App
