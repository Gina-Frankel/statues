import React from 'react';
import { shallow } from 'enzyme';
import StatueListContainer from './StatueListContainer';

it('renders without crashing', () => {
  shallow(< StatueListContainer />)
})

it("displays the title for the list of statues", ()=> {
  const wrapper = shallow(< StatueListContainer />);

  expect(wrapper.text()).toEqual("Statues")
})
