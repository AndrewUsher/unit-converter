import React from 'react'
import PropTypes from 'prop-types'

const ConvertButton = ({ clicked }) => {
  return (
    <div className="button-container">
      <div className="container">
        <button onClick={clicked}>Reset Form</button>
      </div>
    </div>
  )
}

ConvertButton.propTypes = {
  clicked: PropTypes.func.isRequired
}

export default ConvertButton
