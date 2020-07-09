import React from "react";
import { shallow, mount } from "enzyme";
import { StatueMenu } from "./StatueMenu";
import { StatueMenuItem } from "./StatueMenuItem";

it("renders without crashing", () => {
  const MockSlaverStatues = [
    {
      name: "Edward Colston",
    },
  ];

  const wrapper = shallow(<StatueMenu statue={MockSlaverStatues} />);

  expect(wrapper).toHaveLength(1);
});

it("renders a StatueMenuItem ", () => {
  const MockSlaverStatues = [
    {
      name: "Edward Colston",
    },
  ];
  const wrapper = shallow(<StatueMenu statue={MockSlaverStatues} />);

  const id = "Edward Colston";
  const node = {
    name: "Edward Colston",
    summary: "mean",
  };
  const statueMenuItem = <StatueMenuItem key={id} value={node} />;

  expect(wrapper.containsMatchingElement(statueMenuItem)).toEqual(true);
});
