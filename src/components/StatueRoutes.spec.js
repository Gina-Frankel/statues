import React from "react";
import { shallow } from "enzyme";
import { StatueRoute } from "./index";

it("renders without crashing", () => {
  const wrapper = shallow(<StatueRoute />);

  expect(wrapper).toHaveLength(1);
});
