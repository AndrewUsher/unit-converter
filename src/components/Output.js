import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Container } from './Common'

const OutputContainer = styled.div`
  background-color: ${props => darken(0.05, props.theme.bgColor)};
  box-shadow: 2px 3px 1px rgba(#000, 15%);
  font-size: 30px;
  width: 100%;
  height: 30vh;
  display: flex;
  font-family: ${props => props.theme.siteFont};
  align-items: center;
  justify-content: center;
`

const Output = ({ val, unit }) => {
  return (
    <Container>
      <OutputContainer>
        {(val && val.toFixed(2)) || 0} {unit}
      </OutputContainer>
    </Container>
  )
}

export default Output
