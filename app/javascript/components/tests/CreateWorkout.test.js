import React from 'react'
import { render, screen } from "@testing-library/react"
import CreateWorkout from "../pages/CreateWorkout"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("<CreateWorkout />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CreateWorkout />
      </BrowserRouter>
    )
  })

  it("renders the page", () => {
  })

  it("has a heading", () => {
    expect(screen.getByRole('heading', {
      name: /are you ready to become alpha\?/i
    })).toBeInTheDocument
  })

  it("has a form with entries for name, type, duration, schedule, and description", () => {
    screen.logTestingPlaygroundURL
    
    expect(screen.getByPlaceholderText(/what is the workout name/i)).toBeInTheDocument

    expect(screen.getByPlaceholderText(/what is the type of workout\?/i)).toBeInTheDocument

    expect(screen.getByPlaceholderText(/how long does this exercise take\?/i)).toBeInTheDocument

    expect(screen.getByText(/schedule/i)).toBeInTheDocument

    expect(screen.getByPlaceholderText(/describe the workout!/i)).toBeInTheDocument
  })

  it("has a button to submit", () => {
    expect(screen.getByRole('button', {
      name: /submit/i
    })).
    toBeInTheDocument
  })

  it("has a button to cancel", () => {
    expect(screen.getByRole('button', {
      name: /cancel/i
    })).toBeInTheDocument
  })
})