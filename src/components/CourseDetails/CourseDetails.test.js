import React from "react";
import { render } from "@testing-library/react";
import CourseDetails from "./CourseDetails";

describe("CourseDetails tests", () => {
  it("should render", () => {
    expect(render(<CourseDetails />)).toBeTruthy();
  });
});
