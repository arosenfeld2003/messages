import React from "react";
import { shallow } from "enzyme";
import Button from "./button";

describe("Button", () => {

  it("should be render correctly", () => {
    const mockFn = jest.fn();
    const tree = shallow(
      <Button type={"submit"}
      className={"button"}
      onClick={mockFn}>Click me</Button>
    )

    expect(tree).toMatchSnapshot();
  })

  it("should call mock function on click", () => {
    const mockFn = jest.fn();

    const tree = shallow(
      <Button type={"submit"}
      className={"button"}
      onClick={mockFn}>Click me</Button>
    )

    tree.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  })

});
