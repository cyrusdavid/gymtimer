import React, {useState, useEffect, useRef} from 'react'
import {Howl} from 'howler'
import {formatSeconds} from '../utils'
import Duration from './duration'

const App: React.FunctionComponent<{durations: number[]}> = ({durations}) => {
	const [time, setTime] = useState(0)

	useEffect(() => {
		if (time) {
			setTimeout(() => setTime(t => t - 1), 1000)
		}
	}, [time])

	const shortBeep = new Howl({
		src: '/audio/short.mp3'
	})
	const longBeep = new Howl({
		src: '/audio/long.mp3'
	})

	const firstRender = useRef(true)
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false
			return
		}

		if (time === 0) {
			longBeep.play()
		} else if (time < 4) {
			shortBeep.play()
		}
	})

	return (
		<div className="p-2 h-full lg:flex lg:items-center">
			<div className="border border-gray-200 h-full mx-auto grid">
				<div className="time">{formatSeconds(time)}</div>
				{durations.map(duration => <Duration key={duration} duration={duration} setTime={setTime}/>)}
				<div className="duration">Reset</div>
			</div>
		</div>
	)
}

export default App
