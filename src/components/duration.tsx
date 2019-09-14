import React from 'react'
import {formatSeconds} from '../utils'

type props = {
	duration: number;
	setTime: (duration: number) => void;
}

const Duration: React.FunctionComponent<props> = ({duration, setTime}) => {
	const onClick: React.MouseEventHandler = () => setTime(duration)
	return <button type="button" className="duration" onClick={onClick}>{formatSeconds(duration)}</button>
}

export default React.memo(Duration)
