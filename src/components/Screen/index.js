import React from 'react'
import './Screen.css'

export default ({ pin }) => {

  const num = 4;
  let maskedPin;

  if(pin.length < 4) {
    let emptySpace = Array(num - pin.length).fill('');
    maskedPin = [...pin.split(''), ...emptySpace];
  } else {
    maskedPin = [...pin.split('')]
  }

  if(pin.length > 1 && isNaN(parseFloat(pin))) {
    maskedPin = <p className="pin">{pin}</p>
  } else {
    maskedPin = maskedPin.map((item, i) => {
      return i === pin.length - 1 ? <p key={i} className="pin">{ item }</p> : 
        item === '' ? <div key={i} className="pin-circle" /> : 
        <div key={i} className="pin-circle pin-circle-complete" />
    })
  }

  return (
    <div className="screen">
        { maskedPin }
    </div>
  )
}