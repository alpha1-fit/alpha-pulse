import { render, screen } from "@testing-library/react";
import About from "../components/pages/About";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { UserEvent } from "@testing-library/user-event";

describe("<About />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });

  it("renders", () => {
  });

  it("displays an image", () => {
    expect(screen.getByRole('img', { name: /product manager/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /project manager/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /design lead/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /tech lead/i })).toBeInTheDocument
  })

  it("contains buttons for next and previous", () => {
    expect(screen.getByText(/previous/i)).toBeInTheDocument
    expect(screen.getByText(/next/i)).toBeInTheDocument
  })

  it("contains a title", () => {
    expect(screen.getByRole('heading', { name: /yahya ahmed/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /joel carr/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /dennis tran/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /chris aument/i })).toBeInTheDocument
  })

  it("contains a description", () => {
    expect(screen.getByText(/product manager/i)).toBeInTheDocument
    expect(screen.getByText(/project manager/i)).toBeInTheDocument
    expect(screen.getByText(/design lead/i)).toBeInTheDocument
    expect(screen.getByText(/tech lead/i)).toBeInTheDocument
  })

  it("contains buttons for linkedin, github, and resume", () => {
    expect(screen.getByRole('img', { name: /github/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /linkedin/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /resume/i })).toBeInTheDocument
  })

  // It statements left as placeholder for future update to incorporate userEvents
  it("changes developer when clicking next or previous", () => {

  })

  // Low priority tests that won't improve coverage, but validate expected behaviors
  it("opens a new window when clicking linkedin or github", () => {

  })

  it("downloads a file when clicking resume", () => {

  })
});
