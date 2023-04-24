import { render } from "@testing-library/react";
import About from "../pages/About";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("<About />", () => {
  it("displaying each developers profile", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });
});
