import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Screen from './index'

describe('Screen', () => {

  let wrapper

  beforeEach(() => {
  wrapper = shallow(<Screen pin={ '1234' } />)
  })

  it('should render', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should only display the last number of the pin', () => {
    const text = wrapper.render().text()
    expect(text).not.to.include('2')
    expect(text).to.include('4')
  })

})
