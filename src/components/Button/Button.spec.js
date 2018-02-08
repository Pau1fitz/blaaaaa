import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'
import Button from './index'


describe('Button', () => {

  let wrapper
  const updatePin = () => {}

  beforeEach(() => {
    wrapper = mount(
      <Button 
        number={1} 
        updatePin={ updatePin } 
      />
    )
  })

  it('Button should render', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should set the state of the button to active when clicked', () => {
    wrapper.instance().pressNumber()
    expect(wrapper.instance().state.active).to.be.true
  })

})
