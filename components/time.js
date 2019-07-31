import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

function Time({ time }) {
  return (
    <div className="time font-normal">{moment.duration(time * 1000).format('mm:ss', {
      trim: false
    })}
    </div>
  )
}

Time.propTypes = {
  time: PropTypes.number.isRequired
}

const mapStateToProps = ({ time }) => ({
  time
})

export default connect(mapStateToProps)(Time)
