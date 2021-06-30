import React from "react";
import { render } from "@testing-library/react";
import StudentList from "./StudentList";

describe("StudentList tests", () => {
  it("should render", () => {
    expect(render(<StudentList />)).toBeTruthy();
  });
});
