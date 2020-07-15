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

  const wrapper = shallow(<StatueMenu statues={MockSlaverStatues} />);

  expect(wrapper).toHaveLength(1);
});

it("renders a StatueMenuItem ", () => {
  const MockSlaverStatues = [
    {
      name: "Edward Colston",
    },
  ];
  const wrapper = shallow(<StatueMenu statues={MockSlaverStatues} />);

  const node = {
    name: "Edward Colston",
  };
  const statueMenuItem = <StatueMenuItem key={0} value={node} />;

  expect(wrapper.containsMatchingElement(statueMenuItem)).toEqual(true);
});
