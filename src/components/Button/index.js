import React, { Component } from 'react'
import './Button.css'

export default class extends Component {

  state = {
    active: false
  }

  pressNumber = () => {

    this.setState({
      active: true
    })

    this.props.updatePin(this.props.number)

    setTimeout(() => {
      this.setState({
        active: false
      })
    }, 1000);
  }

  render() {
    return (
      <div 
        className={ this.state.active ? "button active" : "button" }
        onClick={ this.pressNumber }
        onTouchEnd={ this.pressNumber }
      >
          <p className="number">{ this.props.number }</p>
      </div>
    )
  }

}