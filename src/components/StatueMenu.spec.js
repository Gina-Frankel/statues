import React from "react";
import { shallow, mount } from "enzyme";
import { StatueList } from "./StatueMenu";
//import { render } from "@testing-library/react";
import MockedStatueListItem from "./StatueListItem";

it("renders without crashing", () => {
  const MockSlaverStatues = [
    {
      name: "Edward Colston",
    },
  ];

  const wrapper = shallow(<StatueList statue={MockSlaverStatues} />);

  expect(wrapper).toHaveLength(1);
});

// MOCKING

// jest.mock("./StatueListItem", () => {
//   return function DummyItem(props){
//   <li>{props.value.name}</li>;
//   }
// }

//  it("should return correct component", () => {
// //   const wrapper = mount(<StatueListItem />);
//  });

// it("renders name of statue", () => {
//   const MockSlaverStatues = [
//     {
//       name: "Edward Colston",
//     },
//   ];

//   const { wrapper } = shallow(<StatueList statue={MockSlaverStatues} />);
//   expect(wrapper.text()).toContain("Edward Colston");
// });

// it("renders name of statue", () => {
//   const MockSlaverStatues = [
//     {
//       name: "Edward Colston",
//     },
//   ];
//   const wrapper = shallow(<StatueList statue={MockSlaverStatues} />);

//   expect(wrapper.text()).toContain("Edward Colston");
// });

// it("renders names of multiple statues", () =>{
//   const MockSlaverStatues = [
//     {
//       name: "Edward Colston",
//     },
//     {
//       name: "Marquis de Lafayette",
//     }
//   ]
//   const wrapper = shallow (<StatueList statue={MockSlaverStatues} />);
//   expect(wrapper.text()).toContain("Edward Colston")
//   expect(wrapper.text()).toContain("Marquis de Lafayette")
// })
