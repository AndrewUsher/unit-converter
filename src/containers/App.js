import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Converter from './Converter'
import Footer from '../components/Footer'
import theme from '../utils/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Header />
      <Converter />
      <Footer />
    </Fragment>
  </ThemeProvider>
)

export default App
