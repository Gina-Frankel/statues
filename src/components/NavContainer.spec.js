import React from "react";
import { shallow } from "enzyme";
import { NavContainer } from "./NavContainer";

it("renders correctly", () => {
  const wrapper = shallow(<NavContainer />);

  expect(wrapper).toHaveLength(1);
});
