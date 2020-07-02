import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

it('renders without crashing', () => {
  const wrapper = shallow(<Heading />)

  expect(wrapper).toHaveLength(1)
})

describe("Header", () => {
  it ('displays app name', () => {
    const wrapper = shallow(<Heading/>);
    
    expect(wrapper.text()).toContain("Problematic Public Art")
  
  });
  it ('displays tag line', () => {
    const wrapper = shallow(<Heading/>);
    
    expect(wrapper.text()).toContain("Identifing, educating and moving forward")
  
  });
});