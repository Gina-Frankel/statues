import React from "react";
import { shallow } from "enzyme";
import { StatueMenuContainer } from "./StatueMenuContainer";

it("renders without crashing", () => {
  const wrapper = shallow(<StatueMenuContainer />);

  expect(wrapper).toHaveLength(1);
});

it("displays the title for the list of statues", () => {
  const wrapper = shallow(<StatueMenuContainer />);

  expect(wrapper.text()).toContain("Statues");
});
