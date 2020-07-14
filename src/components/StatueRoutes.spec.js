import React from "react";
import { shallow } from "enzyme";
import { StatueRoutes } from "./index";

it("renders without crashing", () => {
  const wrapper = shallow(<StatueRoutes />);

  expect(wrapper).toHaveLength(1);
});
