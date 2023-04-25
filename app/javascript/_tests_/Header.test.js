import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../components/components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("has clickable links for a registered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    );
    const createWorkout = userEvent.click(
      screen.getByRole("link", { name: /create workout/i })
    );
    const signOut = userEvent.click(screen.getByText(/sign out/i));
  });

  it("has clickable links for an unregistered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    );
    const signIn = userEvent.click(screen.getByText(/sign in/i));
    const signUp = userEvent.click(screen.getByText(/sign up/i));
  });
});
