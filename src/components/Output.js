import React from 'react'

export default ({ val, unit }) => {
  return (
    <div className="output-container">
      <div className="container">
        <p>{val} {unit}</p>
      </div>
    </div>
  )
}
