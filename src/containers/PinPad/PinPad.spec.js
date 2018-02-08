import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import PinPad from './index'

describe('PinPad', () => {

  let wrapper
  const updatePin = () => {}

  beforeEach(() => {
    wrapper = shallow(
      <PinPad />
    )
  })

  it('should render', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should display to the user when the pin is OK', () => {
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(2)
    wrapper.instance().updatePin(3)
    wrapper.instance().updatePin(4)
    expect(wrapper.instance().state.pin).to.equal('OK')
  })

  it('should display to the user when the pin is incorrect', () => {
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    expect(wrapper.instance().state.pin).to.equal('INCORRECT')
  })
 
  it('should not allow a user enter more than 4 numbers', () => {
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(2)
    wrapper.instance().updatePin(3)
    wrapper.instance().updatePin(4)
    wrapper.instance().updatePin(5)
    expect(wrapper.instance().state.pin).not.to.equal('12345')
  })

  it('should keep track of the pin', () => {
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(2)
    wrapper.instance().updatePin(3)
    expect(wrapper.instance().state.pin).to.equal('123')
  })

  it('should display to the user when the pinpad is locked', () => {

    jest.useFakeTimers();

    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    jest.runAllTimers();
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    jest.runAllTimers();
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)

    expect(wrapper.instance().state.pin).to.equal('LOCKED')
  })

  it('should display a blank pinpad after screen is no longer locked', () => {

    jest.useFakeTimers();

    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    jest.runAllTimers()
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    jest.runAllTimers()
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    wrapper.instance().updatePin(1)
    jest.runAllTimers()
    expect(wrapper.instance().state.pin).to.equal('')
    
  })

})
