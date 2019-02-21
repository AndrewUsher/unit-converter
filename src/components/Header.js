import React from 'react'
import styled from 'styled-components'
import { Container } from './Common'

const Header = styled.header`
  background-color: ${props => props.theme.primaryColor};
  box-shadow: 0 5px 2px rgba(#000, 15%);
  margin-bottom: 25px;
  padding: 10px 30px;
`

const Heading = styled.h1`
  font-size: 36px;
  font-family: $siteFont;
  font-weight: normal;
`

export default () => (
  <Header>
    <Container>
      <Heading>Unit Converter</Heading>
    </Container>
  </Header>
)
