import React from "react";
import { shallow } from "enzyme";
import { StatueListItem } from "./StatueListItem"

it ("renders without crashing", () => {
  const wrapper = shallow(<StatueListItem />)
  expect(wrapper).toHaveLength(1)
})

it ("returns the name of one statue", () => {
  const MockSlaverStatues = [
    {
      name: "Edward Colston",
    },
  ];
  const wrapper = shallow(<StatueListItem statue={MockSlaverStatues}/>);
  expect(wrapper.text()).toContain("Edward Colston")
})