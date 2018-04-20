import React from 'react'
import PropTypes from 'prop-types'

const ConvertButton = ({ clicked }) => {
  return (
    <div className="container button-container">
      <button onClick={clicked}>Reset Form</button>
    </div>
  )
}

ConvertButton.propTypes = {
  clicked: PropTypes.func.isRequired
}

export default ConvertButton
