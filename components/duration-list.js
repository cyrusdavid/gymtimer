import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Duration from './duration'

function DurationList({ durations }) {
  return (
    <>
      {durations.map(duration => (
        <Duration key={duration} duration={duration}/>
      ))}
    </>
  )
}

DurationList.propTypes = {
  durations: PropTypes.arrayOf(PropTypes.number).isRequired
}

const mapStateToProps = ({ durations }) => ({ durations })

export default connect(mapStateToProps)(DurationList)
