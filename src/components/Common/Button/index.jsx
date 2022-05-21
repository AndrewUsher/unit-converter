import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Container } from '..'

const StyledButton = styled.button`
  background-color: ${props => darken(0.2, props.theme.primaryColor)};
  border: none;
  color: ${props => props.theme.bgColor};
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 40px;
  padding: 10px 15px;
  transition: background-color 400ms, transform 300ms;

  &:hover {
    background-color: ${props => darken(0.4, props.theme.primaryColor)};
    color: #f3f3f3;
    transform: scale(1.1);
  }
`

const Button = ({ children, ...rest }) => (
  <Container>
    <StyledButton {...rest}>{children}</StyledButton>
  </Container>
)

export default Button
