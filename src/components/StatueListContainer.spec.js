import React from 'react';
import { shallow } from 'enzyme';
import { StatueListContainer } from './StatueListContainer';

it('renders without crashing', () => {
  const wrapper = shallow(< StatueListContainer />);

  expect(wrapper).toHaveLength(1)
})

it("displays the title for the list of statues", ()=> {
  const wrapper = shallow(< StatueListContainer />);

  expect(wrapper.text()).toContain("Statues")
})
