import React from "react";
import { shallow, mount } from "enzyme";
import StatueList from "./Statuelist";
//import StatueListContainer from "./StatueListContainer";


it("renders without crashing", () => {
  shallow (<StatueList />)
});

it('renders name of statue', () => {
  const wrapper = shallow (< StatueList />)

  expect(wrapper.text()).toContain("Edward Colston")
})


// const mockStatue = { statueName: "Edward Colston" };
// shallow(< StatueList statue={mockStatue} />);