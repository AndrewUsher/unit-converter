import React from 'react'
import { darken } from 'polished'
import styled from 'styled-components'
import { Link, Paragraph } from './Common'

const StyledFooter = styled.footer`
  background-color: ${props => darken(0.1, props.theme.primaryColor)};
  bottom: 0;
  color: ${props => props.theme.bgColor};
  font-family: ${props => props.theme.siteFont};
  padding: 10px 30px;
  position: absolute;
  text-align: center;
  width: 100%;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph>
        Made with <span role="img" aria-label="love">💛</span> and <span role="img" aria-label="hard word">⚒️</span> by{' '}
        <Link href="https://github.com/AndrewUsher">Andrew Usher</Link>
      </Paragraph>
    </StyledFooter>
  )
}

export default Footer
