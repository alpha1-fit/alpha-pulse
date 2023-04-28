import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import DropDown from "../components/components/DropDown";

const filterWorkoutsSpy = jest.fn()

describe("<SignIn />", () => {
  const renderModal = () => {
    render(
      <DropDown loggedIn={true} currentUser={{ id: 1 }} filterWorkouts={filterWorkoutsSpy} />
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("Renders without crashing", () => {
    renderModal()
  })

  it("shows a button", () => {
    renderModal()
    let toggleButton = screen.getByRole('button', {
      name: /all workouts/i
    })

    expect(toggleButton).toBeInTheDocument
  })

  it("allows clicking on a button to view all", () => {
    renderModal()
    let toggleButton = screen.getByRole('button', {
      name: /all workouts/i
    })

    act(() => {
      fireEvent.click(toggleButton)
    })

    let allButton = screen.getByRole('menuitem', {
      name: /all workouts/i
    })

    act(() => {
      fireEvent.click(allButton)
    })
    expect(filterWorkoutsSpy).toHaveBeenCalled()
  })

  it("allows clicking on a button to view mine", () => {
    renderModal()
    let toggleButton = screen.getByRole('button', {
      name: /all workouts/i
    })

    act(() => {
      fireEvent.click(toggleButton)
    })

    let myButton = screen.getByRole('menuitem', {
      name: /my workouts/i
    })

    act(() => {
      fireEvent.click(myButton)
    })

    expect(filterWorkoutsSpy).toHaveBeenCalled()
  })
})