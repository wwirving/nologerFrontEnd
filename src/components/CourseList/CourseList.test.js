import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList tests", () => {
  it("should render", () => {
    expect(render(<CourseList />)).toBeTruthy();
  });
});
