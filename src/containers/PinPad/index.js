import React, { Component } from 'react'
import PinPadView from '../../components/PinPadView'

class PinPad extends Component {

  state = {
    correctPin: '1234',
    pin: '',
    incorrectAttempts: 0
  }

  updatePin = (number) => {

    const { pin } = this.state

    if(pin.length > 4) return

    this.setState(prevState => {
      return {
        pin: prevState.pin += number
      }
    }, this.checkPin)

  }

  checkPin() {

    const { pin, correctPin } = this.state

    if(pin.length === 4 && pin !== correctPin) {

      if(this.state.incorrectAttempts === 2) {
        this.lockScreen()
        return
      }

      this.setState(prevState => {
        return {
          pin: 'INCORRECT',
          incorrectAttempts: prevState.incorrectAttempts += 1
        }
      }, () => this.clearPin(500))
 
    }

    if(pin === correctPin) {
      this.setState({
        pin: 'OK',
        incorrectAttempts: 0
      }, () => this.clearPin(500))
    }

  }

  lockScreen() {

    this.setState({
      pin: 'LOCKED'
    }, () => this.clearPin(3000))
  
  }

  clearPin(time) {

    setTimeout(() => {
      this.setState({
        pin: ''
      })
    }, time)

  }

  render() {

    return (
      <PinPadView 
        pin={ this.state.pin }
        updatePin={ this.updatePin } 
      />
    )
  }
}

export default PinPad;
