import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import Heading from '../index'
import { Wrapper } from '../style';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('With Enzyme', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    shallow(<Heading text="Hello world!" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Component shows "Hello world!"', () => {
    const component = shallow(<Heading text="Hello world!"></Heading>);
    expect(component.find('h2').text()).toEqual('Hello world!')
  })

  it('Should render and match the snapshot', () => {
    const app = shallow(<Heading text="Hello world!" />);
    expect(app).toMatchSnapshot();
  });
})

describe('Jest Styled Components', () => {
  const tree = renderer.create(<Wrapper />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', 'red')
})