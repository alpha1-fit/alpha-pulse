<<<<<<< HEAD
import { render } from "@testing-library/react";
=======

import { render, screen } from "@testing-library/react";
>>>>>>> 2086a696c4a9e7f750750b930f4bc68714ecbe12
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });
});

