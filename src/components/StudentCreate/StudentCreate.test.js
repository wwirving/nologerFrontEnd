import React from "react";
import { render } from "@testing-library/react";
import StudentCreate from "./StudentCreate";

describe("StudentCreate tests", () => {
  it("should render", () => {
    expect(render(<StudentCreate />)).toBeTruthy();
  });
});
