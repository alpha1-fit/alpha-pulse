import React from 'react'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import IndexComments from "../pages/IndexComments"
import "@testing-library/jest-dom"

describe("<IndexWorkouts />", () => {
  it("renders the component", () => {
    render(
      <BrowserRouter>
        <IndexComments logged_in={true}/>
      </BrowserRouter>)

      screen.logTestingPlaygroundURL()
  })

  it("renders when logged out", () => {
    render(
      <BrowserRouter>
        <IndexComments logged_in={false}/>
      </BrowserRouter>)
  })
})