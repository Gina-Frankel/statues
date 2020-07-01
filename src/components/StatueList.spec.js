import React from "react";
import { shallow, mount } from "enzyme";
import StatueList from "./Statuelist";
//import StatueListContainer from "./StatueListContainer";


it("renders without crashing", () => {
  shallow (<StatueList />)
});

it('renders statues', () => {
  const wrapper = shallow (< StatueList />)

  expect(wrapper.text()).toEqual("Edward Colston")
})


// const mockStatue = { statueName: "Edward Colston" };
// shallow(< StatueList statue={mockStatue} />);