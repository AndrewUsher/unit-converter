import React, { Fragment } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Converter from './Converter'
import Footer from '../components/Footer'
import theme from '../utils/theme'

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: $bgColor;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Header />
      <Converter />
      <Footer />
    </Fragment>
  </ThemeProvider>
)

export default App
