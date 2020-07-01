import React from 'react';
import { shallow } from 'enzyme';
import ListTitle from './ListTitle';

it('renders without crashing', () => {
  shallow(< ListTitle />)
})

it("displays the title for the list of statues", ()=> {
  const wrapper = shallow(< ListTitle />);

  expect(wrapper.text()).toEqual("Statues")
})
