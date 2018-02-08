import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import Button from './index'

describe('Button', () => {

  describe('Visual', () => {

    let wrapper
    const updatePin = () => {}

    beforeEach(() => {
      wrapper = shallow(
        <Button 
          number={3} 
          updatePin={ updatePin}  
        />
      )
    })
  
    it('should render', () => {
      expect(wrapper).to.have.length(1)
    })
  
    it('should set the state of the button to active when clicked', () => {
      wrapper.instance().pressNumber()
      expect(wrapper.instance().state.active).to.be.true
    })

  })

  describe('Props', () => {

    it('should call the updatePin method when clicked on', () => {
      const updatePinStub = sinon.spy()
      const wrapper = mount(
        <Button 
          number={3} 
          updatePin={ updatePinStub }  
        />     
      )
      wrapper.find('div').first().simulate('click')
      expect(updatePinStub.calledOnce).to.be.true
    })

  })


})
