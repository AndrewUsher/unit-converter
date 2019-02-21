import React from 'react'

export default ({ val, unit }) => {
  return (
    <div className="output-container">
      <div className="container">
        <p>
          {(val && val.toFixed(2)) || 0} {unit}
        </p>
      </div>
    </div>
  )
}
