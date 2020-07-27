import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders a route to home page", () => {
    const wrapper = shallow(<App />);
    const switchComponents = wrapper.find('Switch');
    const homeRoute = switchComponents.first().props().children[1]
    expect(homeRoute.props.path).toEqual("/");
  });

  it("renders a route to about page", () => {
    const wrapper = shallow(<App />);
    const switchComponents = wrapper.find('Switch');
    const aboutRoute = switchComponents.first().props().children[0]
    expect(aboutRoute.props.path).toEqual("/about");
  });
});
