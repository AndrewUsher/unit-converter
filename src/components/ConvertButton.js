import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Common'

const ConvertButton = ({ clicked }) => {
  return <Button onClick={clicked}>Reset Form</Button>
}

ConvertButton.propTypes = {
  clicked: PropTypes.func.isRequired
}

export default ConvertButton
