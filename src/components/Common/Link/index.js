import styled from 'styled-components'
import { darken } from 'polished'

const Link = styled.a`
  color: ${props => darken(0.2, props.theme.primaryColor)};
  text-decoration: none;

  &:hover {
    text-decoration: underline dotted;
  }
`

export default Link
