import React from 'react'

export default ({ val, unit }) => {
  return (
    <div className="container">
      <div className="output-container">
        <p>{val} {unit}</p>
      </div>
    </div>
  )
}
