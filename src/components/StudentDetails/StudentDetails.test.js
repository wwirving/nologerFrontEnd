import React from "react";
import { render } from "@testing-library/react";
import StudentDetails from "./StudentDetails";

describe("StudentDetails tests", () => {
  it("should render", () => {
    expect(render(<StudentDetails />)).toBeTruthy();
  });
});
