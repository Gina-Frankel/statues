import React from "react";
import { shallow, mount } from "enzyme";
import StatueList from "./Statuelist";
//import StatueListContainer from "./StatueListContainer";


it("renders without crashing", () => {
  shallow(< StatueList />);
});

// it('renders statues as a list item' () => {
//   const wrapper = shallow (< ListContainer />)

// })


//const mockStatue = { statueName: "Edward Colston" };
//shallow(< ListContainer statue={mockStatue} />);