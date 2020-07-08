import React from "react";
import { shallow } from "enzyme";
import { StatueMenuItem } from "./StatueMenuItem";

it("renders without crashing", () => {
  const MockSlaverStatues = [
    {
      name: "Edward Colston",
    },
  ];

  const wrapper = shallow(<StatueMenuItem value={MockSlaverStatues} />);
  expect(wrapper).toHaveLength(1);
});

it("returns the name of statue - Edward Colston", () => {
  const MockSlaverStatues = {
    name: "Edward Colston",
  };
  const wrapper = shallow(
    <StatueMenuItem key={MockSlaverStatues.name} value={MockSlaverStatues} />
  );
  expect(wrapper.text()).toContain("Edward Colston");
});

it("returns the name of statue - Marquis de Lafayette ", () => {
  const MockSlaverStatues = {
    name: "Marquis de Lafayette",
  };
  const wrapper = shallow(
    <StatueMenuItem key={MockSlaverStatues.name} value={MockSlaverStatues} />
  );
  expect(wrapper.text()).toContain("Marquis de Lafayette");
});

// // it("renders name of statue", () => {
// //   const MockSlaverStatues = [
// //     {
// //       name: "Edward Colston",
// //     },
// //   ];
// //   const wrapper = shallow(<StatueList statue={MockSlaverStatues} />);

// //   expect(wrapper.text()).toContain("Edward Colston");
// // });

// // it("renders names of multiple statues", () =>{
// //   const MockSlaverStatues = [
// //     {
// //       name: "Edward Colston",
// //     },
// //     {
// //       name: "Marquis de Lafayette",
// //     }
// //   ]
// //   const wrapper = shallow (<StatueList statue={MockSlaverStatues} />);
// //   expect(wrapper.text()).toContain("Edward Colston")
// //   expect(wrapper.text()).toContain("Marquis de Lafayette")
// // })
