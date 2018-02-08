import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import PinPadView from './index'

describe('PinPadView', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <PinPadView
        pin=''
      />
    )
  })

  it('should render', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should display numbers 0-9', () => {

    expect(wrapper.html()).to.include('0')
    expect(wrapper.html()).to.include('1')
    expect(wrapper.html()).to.include('2')
    expect(wrapper.html()).to.include('3')
    expect(wrapper.html()).to.include('4')
    expect(wrapper.html()).to.include('5')
    expect(wrapper.html()).to.include('6')
    expect(wrapper.html()).to.include('7')
    expect(wrapper.html()).to.include('8')
    expect(wrapper.html()).to.include('9')

  })

  it('should display the screen', () => {
   expect(wrapper.html()).to.include('screen')
  })

})
