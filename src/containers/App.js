import React, { Component } from 'react'
import Header from '../components/Header'
import Converter from './Converter'
import Footer from '../components/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Converter />
        <Footer />
      </div>
    )
  }
}

export default App
