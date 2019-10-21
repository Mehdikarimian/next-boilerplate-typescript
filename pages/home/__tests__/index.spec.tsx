import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import Home from '../index'
import 'jest-styled-components'

describe('With Enzyme', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    shallow(<Home />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Component shows "Hello world!"', () => {
    const component = shallow(<Home />);
    expect(component.find('.homePage').childAt(0).dive().find('h2').text()).toEqual('Hello world!');
  });
})
