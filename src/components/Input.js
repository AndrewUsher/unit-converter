import React from 'react'
import styled from 'styled-components'
import { Container } from './Common'

const InputContainer = styled.div`
  font-family: ${props => props.theme.siteFont};
  padding: 0 30px;
`
const ConvertLength = styled.h2`
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 20px;
`

const ConvertFrom = styled.h3`
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 30px;
`

const BaseSelectAndInput = styled.input`
  background-color: $bgColor;
  border: 2px solid #ddd;
  box-shadow: 2px 3px 0 rgba(#000, 10%);
  height: 30px;
  margin-bottom: 20px;
  margin-right: 15px;
`

const StyledInput = styled(BaseSelectAndInput)`
  border: none;
  font-size: 20px;
`

const Select = styled(BaseSelectAndInput)`
  border: none;
  font-size: 20px;
  padding: 5px 10px;
`

const Input = props => {
  return (
    <InputContainer>
      <Container>
        <ConvertLength>Convert Length</ConvertLength>
        <ConvertFrom>Convert From</ConvertFrom>
        <StyledInput
          as="input"
          type="number"
          onChange={props.valChanged}
          value={props.val}
        />
        <Select
          as="select"
          value={props.convertFrom}
          onChange={props.convertFromChanged}
        >
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
        </Select>
        <span>to</span>
        <Select
          as="select"
          value={props.convertTo}
          onChange={props.convertToChanged}
        >
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
        </Select>
      </Container>
    </InputContainer>
  )
}

export default Input
