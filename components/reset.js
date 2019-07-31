import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setTime } from '../store/actions'

function Reset({ resetTime }) {
  return (
    <button type="button" className="border w-half time cursor-pointer bg-red-100 hover:bg-red-500 hover:text-white" onClick={resetTime}>Reset</button>
  )
}

const mapDispatchToProps = dispatch => ({
  resetTime: () => dispatch(setTime(0))
})

Reset.propTypes = {
  resetTime: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Reset)
