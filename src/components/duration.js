import React from 'react'
import { formatSeconds } from '../utils'

function Duration({ duration, setTime }) {
	const onClick = () => setTime(duration)
	return <button type="button" onClick={onClick} className="duration">{formatSeconds(duration)}</button>
}

export default React.memo(Duration)
