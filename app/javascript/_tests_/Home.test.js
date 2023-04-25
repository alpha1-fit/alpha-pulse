import React from 'react'
import { render, screen } from "@testing-library/react"
import Home from "../components/pages/Home"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>)
        expect(screen.getByRole('heading', {
          name: /are you tired of struggling to achieve your fitness goals alone\?/i
        }))
  })
})