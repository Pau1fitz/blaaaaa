import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Screen from './index';

describe('Screen', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Screen pin='' />);
  })

  it('Screen should render', () => {
    expect(wrapper).to.have.length(1);
  });

});
