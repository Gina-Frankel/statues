import React from "react";
import { shallow } from "enzyme";
import { StatueListItem } from "./StatueListItem"

it ("renders without crashing", () => {
  const wrapper = shallow(<StatueListItem />)
  expect(wrapper).toHaveLength(1)
})