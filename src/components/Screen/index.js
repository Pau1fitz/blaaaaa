import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Screen = ({ pin }) => {

  const num = 4;
  let maskedPin; 

  if(pin.length < 4) {
    let emptySpace = Array(num - pin.length).fill('');
    maskedPin = [...pin.split(''), ...emptySpace]
  } else {
    maskedPin = [...pin.split('')]
  }

  if(pin.length > 1 && isNaN(parseFloat(pin))) {
    maskedPin = <PinNumber>{pin}</PinNumber>
  } else {
    maskedPin = maskedPin.map((item, i) => {
      return i === pin.length - 1 ? <PinNumber key={i}>{ item }</PinNumber> : 
        item === '' ? <PinCircle key={i} /> : 
        <PinCircleComplete key={i} />
    })
  }

  return (
    <ScreenContainer id="screen">
      { maskedPin }
    </ScreenContainer>
  )
}

Screen.propTypes = {
  pin: PropTypes.string
}

const ScreenContainer = styled.section`
  justify-content: center;
  height: 50px;
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
`;

const PinNumber = styled.p`
  color: #fff;
  font-size: 26px;
  margin: 0 10px;
`;

const PinCircle = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 10px;
`;

const PinCircleComplete = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 10px;
  background: #fff;
`;

export default Screen;