import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-test']");
});

test("rendeers increment button", () => {});

test("renders counter display", () => {});
test("clicking button increments counter", () => {});
