import React, { Component } from 'react'
import Button from './components/Button'
import Screen from './components/Screen'
import './App.css'

class App extends Component {

  state = {
    correctPin: '1234',
    pin: '',
    incorrectAttempts: 0
  }

  updatePin = (number) => {

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

    if(!pin.includes('-') && pin === correctPin) {
      this.setState({
        pin: 'OK'
      }, () => this.clearPin(1000))
    }

  }

  lockScreen() {
    this.setState({
      pin: 'LOCKED'
    }, () => this.clearPin(30000))
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
      <div className="App">
          <div className="pin-pad">

            <Screen pin={this.state.pin} />

            <div className="pin-pad-row">
              <Button updatePin={ this.updatePin } number={1} />
              <Button updatePin={ this.updatePin } number={2} /> 
              <Button updatePin={ this.updatePin } number={3} />  
            </div>
            <div className="pin-pad-row">
              <Button updatePin={ this.updatePin } number={4} />
              <Button updatePin={ this.updatePin } number={5} /> 
              <Button updatePin={ this.updatePin } number={6} />  
            </div>
            <div className="pin-pad-row">
              <Button updatePin={ this.updatePin } number={7} />
              <Button updatePin={ this.updatePin } number={8} /> 
              <Button updatePin={ this.updatePin } number={9} />  
            </div>
            <div className="pin-pad-row">
              <Button updatePin={ this.updatePin } number={0} />
            </div>

          </div>

      </div>
    )
  }
}

export default App;
