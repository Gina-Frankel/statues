import React from 'react';
import { shallow } from 'enzyme';
import Banner from './LandingBanner';

describe("Banner", () => {
  it ('displays app name', () => {
    const wrapper = shallow(<Banner/>);
    
    expect(wrapper.text()).toContain("Don't stand for art that doesn't stand for you")
  
  });
  it ('displays tag line', () => {
    const wrapper = shallow(<Banner/>);
    
    expect(wrapper.text()).toContain("Identifing, educating and moving forward")
  
  });
});