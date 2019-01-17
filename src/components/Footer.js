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

export default () => {
  return (
    <StyledFooter>
      <Paragraph>
        Made with 💛 and ⚒️ by{' '}
        <Link href="https://github.com/AndrewUsher">Andrew Usher</Link>
      </Paragraph>
    </StyledFooter>
  )
}
