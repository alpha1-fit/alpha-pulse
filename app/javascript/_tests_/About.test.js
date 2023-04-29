import { render, screen } from "@testing-library/react";
import About from "../components/pages/About";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("<About />", () => {
  const renderPage =() => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    )
  }

  it("renders", () => {
    renderPage()
  });

  it("displays an image", () => {
    renderPage()
    expect(screen.getByRole('img', { name: /product manager/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /project manager/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /design lead/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /tech lead/i })).toBeInTheDocument
  })

  it("contains buttons for next and previous", () => {
    renderPage()
    expect(screen.getByText(/previous/i)).toBeInTheDocument
    expect(screen.getByText(/next/i)).toBeInTheDocument
  })

  it("clicking next and previous change the current view", async () => {
    const user = userEvent.setup()
    renderPage()
    let previousButton = screen.getByText(/previous/i)
    let nextButton = screen.getByText(/next/i)

    expect(screen.getByText('Joel Carr')).toBeInTheDocument
    await user.click(nextButton)
    expect(screen.getByText('Dennis Tran')).toBeInTheDocument
    await user.click(previousButton)
    await user.click(previousButton)
    expect(screen.getByText('Yahya Ahmed')).toBeInTheDocument
    await user.click(nextButton)
    expect(screen.getByText('Joel Carr')).toBeInTheDocument
    await user.click(previousButton)
    await user.click(previousButton)
    expect(screen.getByText('Chris Aument')).toBeInTheDocument
  })

  it("contains a title", () => {
    renderPage()
    expect(screen.getByRole('heading', { name: /yahya ahmed/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /joel carr/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /dennis tran/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /chris aument/i })).toBeInTheDocument
  })

  it("contains a description", () => {
    renderPage()
    expect(screen.getByText(/product manager/i)).toBeInTheDocument
    expect(screen.getByText(/project manager/i)).toBeInTheDocument
    expect(screen.getByText(/design lead/i)).toBeInTheDocument
    expect(screen.getByText(/tech lead/i)).toBeInTheDocument
  })

  it("contains buttons for linkedin, github, and resume", () => {
    renderPage()
    expect(screen.getByRole('img', { name: /github/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /linkedin/i })).toBeInTheDocument
    expect(screen.getByRole('img', { name: /resume/i })).toBeInTheDocument
  })

  it("allows navigating directly to each developer", async () => {
    const user = userEvent.setup()
    renderPage()
    const carouselButtons = screen.getAllByRole("button")
    const carouselCaptions = screen.getAllByRole("heading")

    await user.click(carouselButtons[0])
    expect(carouselCaptions[0]).toBeInTheDocument

    await user.click(carouselButtons[1])
    expect(carouselCaptions[1]).toBeInTheDocument

    await user.click(carouselButtons[2])
    expect(carouselCaptions[2]).toBeInTheDocument

    await user.click(carouselButtons[3])
    expect(carouselCaptions[3]).toBeInTheDocument
  })
})