import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

class Button extends Component {

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
    }, 500)
  }

  render() {

    return (
      <ButtonContainer 
        active={this.state.active}
        onClick={ this.pressNumber }
      >
        <Number>{ this.props.number }</Number>
      </ButtonContainer>
    )
  }

}

Button.propTypes = {
  number: PropTypes.number,
  updatePin: PropTypes.func
}

const ButtonContainer = styled.div`
  border: 1px solid #fff;
  background: transparent;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  outline: none;
  animation-duration: 0.5s;
  animation-name: ${props => props.active ? highlightButton : 'none'};
`

const Number = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
`

const highlightButton = keyframes`
  0%   {
    background-color: transparent;
  }
  50%  {
    background-color: #fff;
  }
  100%  {
    background-color: transparent;
  }
`

export default Button;