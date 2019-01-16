import React, { Component } from 'react'
import length from 'length.js'
import Input from '../components/Input'
import ConvertButton from '../components/ConvertButton'
import Output from '../components/Output'

export default class Converter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 1,
      convertFrom: 'cm',
      outputValue: 0.01,
      convertTo: 'm'
    }
  }

  componentDidMount () {
    console.log(length(1, 'cm').to('m'))
  }

  performConversion = (value = this.state.inputValue || 1) => {
    let { convertFrom, convertTo } = this.state
    console.log({ convertFrom, convertTo })
    value = parseInt(value, 10)
    let output = 0

    output = length(value, convertFrom).to(convertTo).value

    this.setState({
      outputValue: output
    })
  }

  resetForm = () => {
    this.setState(
      {
        inputValue: '1',
        convertFrom: 'cm',
        outputValue: '0.01',
        convertTo: 'm'
      },
      this.performConversion()
    )
  }

  handleInputChange = event => {
    let { value } = event.target
    if (!value) {
      this.setState(
        {
          inputValue: value
        },
        this.performConversion()
      )
    }

    this.setState(
      {
        inputValue: value
      },
      this.performConversion(value)
    )
  }

  handleConvertFromChange = event => {
    const { value } = event.target
    this.setState(
      {
        convertFrom: value
      },
      this.performConversion()
    )
  }

  handleConvertToChange = event => {
    const { value } = event.target
    this.setState(
      {
        convertTo: value
      },
      this.performConversion()
    )
  }

  render () {
    return (
      <div>
        <Input
          val={this.state.inputValue}
          valChanged={this.handleInputChange}
          convertFrom={this.state.convertFrom}
          convertFromChanged={this.handleConvertFromChange}
          convertTo={this.state.convertTo}
          convertToChanged={this.handleConvertToChange}
        />
        <ConvertButton clicked={this.resetForm} />
        <Output val={this.state.outputValue} unit={this.state.convertTo} />
      </div>
    )
  }
}
