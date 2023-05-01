import React from "react"
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import App from "../components/App"
import "@testing-library/jest-dom"

const mockUseNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}))

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(JSON.stringify([{}, {}])),
  })
)

describe("<App />", () => {
  const renderAppOut = () => {
    render(
      <App logged_in={false} current_user={{}} />
    )
  }

  const renderAppIn = () => {
    render(
      <App logged_in={true} current_user={{ id: 1, email: "test@gmail.com", username: "Tester" }} />
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders logged out", () => {
    act(() => renderAppOut())
  })

  it("renders logged in", () => {
    act(() => renderAppIn())
  })

  it("successfully fetches workouts and comments on render", async () => {
    await act(() => renderAppIn())

    expect(fetch).toHaveBeenCalledTimes(2)
  })
})