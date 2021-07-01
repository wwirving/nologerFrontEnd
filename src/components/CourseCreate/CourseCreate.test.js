import React from "react";
import { render } from "@testing-library/react";
import CourseCreate from "./CourseCreate";

describe("CourseCreate tests", () => {
  it("should render", () => {
    expect(render(<CourseCreate />)).toBeTruthy();
  });
});
