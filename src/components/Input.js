import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  return (
    <div className="input">
      <div className="container">
        <h2>Convert Length</h2>
        <h3>Convert From</h3>
        <input type="number" onChange={props.valChanged} value={props.val} />
        <select value={props.convertFrom} onChange={props.convertFromChanged}>
          <option value="pm">Picometres</option>
          <option value="nm">Nanometres</option>
          <option value="um">Micrometres</option>
          <option value="mm">Milimeters</option>
          <option value="cm">Centimeters</option>
          <option value="dm">Decimeters</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
          <option value="in">Inches</option>
          <option value="ft">Feett</option>
          <option value="yd">Yards</option>
          <option value="mi">Miles</option>
        </select>
        <span>to</span>
        <select value={props.convertTo} onChange={props.convertToChanged}>
          <option value="pm">Picometres</option>
          <option value="nm">Nanometres</option>
          <option value="um">Micrometres</option>
          <option value="mm">Milimeters</option>
          <option value="cm">Centimeters</option>
          <option value="dm">Decimeters</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
          <option value="in">Inches</option>
          <option value="ft">Feet</option>
          <option value="yd">Yards</option>
          <option value="mi">Miles</option>
        </select>
      </div>
    </div>
  )
}

Input.propTypes = {
  val: PropTypes.string.isRequired,
  valChanged: PropTypes.func.isRequired,
  convertFrom: PropTypes.string.isRequired,
  convertTo: PropTypes.string.isRequired,
  convertFromChanged: PropTypes.func.isRequired,
  convertToChanged: PropTypes.func.isRequired
}

export default Input
