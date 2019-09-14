import React from 'react'
import {formatSeconds} from '../utils'

type props = {
	duration?: number;
	onClick: React.MouseEventHandler;
	children?: React.ReactNode;
}

const Duration: React.FunctionComponent<props> = ({duration, onClick, children}) => {
	return <button type="button" className="duration" onClick={onClick}>{(duration && formatSeconds(duration)) || children}</button>
}

export default React.memo(Duration)
