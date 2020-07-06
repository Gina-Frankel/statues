import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />)
})

describe("Statue list", () => {
  it ('displays a list of statues', () => {
    const wrapper = shallow(<App/>);
    
    expect(wrapper.text()).toContain("Edward Colston")
  

  });
});
