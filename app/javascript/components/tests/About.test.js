import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import { BrowserRouter } from "react-router-dom";
import React from "react";
// import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

describe("<About />", () => {
  it("displaying each developers profile", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.logTestingPlaygroundURL());
    // const about = screen.getByRole("button", {
    // name: /\[object object\]/i,
    // const about = screen.getByRole("button", {
    //   name: /dennis tran/i,
    // });
    // });
    // const about = screen.getByRole('heading', { name: /chris aument/i })
    // const about = screen.getByText(/next/i);
    const about = screen.getByText(/yahya ahmed/i);
    expect(about).toBeInTheDocument();
  });
});
