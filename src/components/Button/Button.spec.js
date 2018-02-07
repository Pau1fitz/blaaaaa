import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Button from './index'

describe('Footer', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  it('Button should render', () => {
    expect(wrapper).to.have.length(1)
  })

})
