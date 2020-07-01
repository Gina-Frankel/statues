import React from "react";
import { shallow, mount } from "enzyme";
import StatueList from "./Statuelist";

it("renders without crashing", () => {
  const MockSlaverStatues = [
    {
      statueName: "Edward Colston",
    },
  ];

  shallow(<StatueList statue={MockSlaverStatues} />);
});

it("renders name of statue", () => {
  const MockSlaverStatues = [
    {
      statueName: "Edward Colston",
    },
  ];
  const wrapper = shallow(<StatueList statue={MockSlaverStatues} />);

  expect(wrapper.text()).toContain("Edward Colston");
});
