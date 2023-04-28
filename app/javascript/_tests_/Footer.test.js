import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { fireEvent, act } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route, useNavigate } from "react-router-dom"
import "@testing-library/jest-dom"
import Footer from "../components/components/Footer"
import Home from "../components/pages/Home"
import About from "../components/pages/About"

describe("<Footer />", () => {
  const renderComponent = () => {
    render(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
    )
  }

  it("renders without crashing", () => {
    renderComponent()
  })

  it("renders the 'About Us' text", () => {
    renderComponent()
    const textElement = screen.getByText("©About Us")
    expect(textElement).toBeInTheDocument()
  })

  it("renders four Link components", () => {
    renderComponent()
    const links = screen.getAllByRole("link")
    expect(links.length).toBe(4)
  })

  it("renders each Button component with the correct text", () => {
    renderComponent()
    const buttons = screen.getAllByRole("button")
    const buttonLabels = buttons.map((button) => button.textContent)
    expect(buttonLabels).toEqual(["αJoel", "αYahyα", "αChris", "αDennis"])
  })
})
