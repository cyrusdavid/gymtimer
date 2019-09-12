import React from 'react'
import PropTypes from 'prop-types'
import {formatSeconds} from '../utils'

function Duration({duration, setTime}) {
	const onClick = () => setTime(duration)
	return <button type="button" className="duration" onClick={onClick}>{formatSeconds(duration)}</button>
}

Duration.propTypes = {
	duration: PropTypes.number.isRequired,
	setTime: PropTypes.func.isRequired
}

export default React.memo(Duration)
