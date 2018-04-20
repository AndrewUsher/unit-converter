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
          <option value="pm">Picometre</option>
          <option value="nm">Nanometre</option>
          <option value="um">Micrometre</option>
          <option value="mm">Milimeter</option>
          <option value="cm">Centimeter</option>
          <option value="dm">Decimeter</option>
          <option value="m">Meter</option>
          <option value="km">Kilometer</option>
          <option value="in">Inch</option>
          <option value="ft">Foot</option>
          <option value="yd">Yard</option>
          <option value="mi">Mile</option>
        </select>
        <span>to</span>
        <select value={props.convertTo} onChange={props.convertToChanged}>
          <option value="pm">Picometre</option>
          <option value="nm">Nanometre</option>
          <option value="um">Micrometre</option>
          <option value="mm">Milimeter</option>
          <option value="cm">Centimeter</option>
          <option value="dm">Decimeter</option>
          <option value="m">Meter</option>
          <option value="km">Kilometer</option>
          <option value="in">Inch</option>
          <option value="ft">Foot</option>
          <option value="yd">Yard</option>
          <option value="mi">Mile</option>
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
