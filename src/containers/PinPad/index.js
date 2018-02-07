import React, { Component } from 'react'
import Button from '../../components/Button'
import Screen from '../../components/Screen'
import styled from 'styled-components'

class PinPad extends Component {

  state = {
    correctPin: '1234',
    pin: '',
    incorrectAttempts: 0
  }

  updatePin = (number) => {

    const { pin } = this.state

    if(pin === 'LOCKED' ||
      pin === 'INCORRECT' ||
      pin === 'OK') {
      return;
    }

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
        this.lockScreen();
        return;
      }

      this.setState(prevState => {
        return {
          pin: 'INCORRECT',
          incorrectAttempts: prevState.incorrectAttempts += 1
        }
      }, () => this.clearPin(500))
 
    }

    if(pin === correctPin) {
      this.handleScreenOutput('OK', 500)
    }

  }

  handleScreenOutput(message, time) {
    this.setState({
      pin: message
    }, () => this.clearPin(time))
  }

  lockScreen() {
    this.handleScreenOutput('LOCKED', 3000)
  }

  clearPin(time) {

    setTimeout(() => {
      this.setState({
        pin: '',
        incorrectAttempts: 0
      })
    }, time)

  }

  render() {

    return (
      <PinPadContainer>

        <Screen pin={this.state.pin} />

        <PinPadRow>
          <Button updatePin={ this.updatePin } number={1} />
          <Button updatePin={ this.updatePin } number={2} /> 
          <Button updatePin={ this.updatePin } number={3} />  
        </PinPadRow>
        <PinPadRow>
          <Button updatePin={ this.updatePin } number={4} />
          <Button updatePin={ this.updatePin } number={5} /> 
          <Button updatePin={ this.updatePin } number={6} />  
        </PinPadRow>
        <PinPadRow>
          <Button updatePin={ this.updatePin } number={7} />
          <Button updatePin={ this.updatePin } number={8} /> 
          <Button updatePin={ this.updatePin } number={9} />  
        </PinPadRow>
        <PinPadRow>
          <Button updatePin={ this.updatePin } number={0} />
        </PinPadRow>

      </PinPadContainer>

    )
  }
}

const PinPadContainer = styled.section`
  background: linear-gradient(to right, #252428 , #414142);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.75);
  max-width: 280px;
  margin: 0 auto;
  padding: 30px 15px;
  border-radius: 5px;
` 

const PinPadRow = styled.div`
  display: flex;
  justify-content: center;
`

export default PinPad;
