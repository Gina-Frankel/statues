import React from "react";
import { shallow } from "enzyme";
import { NavContainer } from "./NavContainer";
import { Link } from "react-router-dom";

describe("NavContainer", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<NavContainer />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a Link to the About component/page", () => {
    const wrapper = shallow(<NavContainer />);
    const link = <Link to="/about">About</Link>;
    expect(wrapper.containsMatchingElement(link)).toEqual(true);
  });
});
