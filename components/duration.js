import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import { setTime } from '../store/actions'

momentDurationFormatSetup(moment)

function Duration({ duration, setTime }) {
  const onClick = () => setTime(moment.duration(duration * 1000).asSeconds())

  return <button type="button" className="border w-half time cursor-pointer hover:bg-red-500 hover:text-white" onClick={onClick}>{moment.duration(duration * 1000).format('mm:ss', { trim: false })}</button>
}

Duration.propTypes = {
  duration: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setTime: time => dispatch(setTime(time))
})

export default connect(null, mapDispatchToProps)(Duration)
