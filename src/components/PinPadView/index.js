import React from 'react'
import Button from '../../components/Button'
import Screen from '../../components/Screen'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PinPadView = ({pin, updatePin}) => {

  return (
    <PinPadContainer>
      <Screen pin={ pin } />
      <PinPadRow>
        <Button updatePin={ updatePin } number={1} />
        <Button updatePin={ updatePin } number={2} /> 
        <Button updatePin={ updatePin } number={3} />  
      </PinPadRow>
      <PinPadRow>
        <Button updatePin={ updatePin } number={4} />
        <Button updatePin={ updatePin } number={5} /> 
        <Button updatePin={ updatePin } number={6} />  
      </PinPadRow>
      <PinPadRow>
        <Button updatePin={ updatePin } number={7} />
        <Button updatePin={ updatePin } number={8} /> 
        <Button updatePin={ updatePin } number={9} />  
      </PinPadRow>
      <PinPadRow>
        <Button updatePin={ updatePin } number={0} />
      </PinPadRow>
    </PinPadContainer>
  )
  
}

PinPadView.propTypes = {
  updatePin: PropTypes.func,
  pin: PropTypes.string
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

export default PinPadView;
