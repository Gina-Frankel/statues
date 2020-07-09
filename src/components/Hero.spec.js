import React from "react";
import { shallow } from "enzyme";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("displays app name", () => {
    const wrapper = shallow(<Hero />);

    expect(wrapper.text()).toContain(
      "Don't stand for art that doesn't stand for you"
    );
  });
  it("displays tag line", () => {
    const wrapper = shallow(<Hero />);

    expect(wrapper.text()).toContain(
      "There are dozens of public artworks depicting people involved in slavery"
    );
  });
});
