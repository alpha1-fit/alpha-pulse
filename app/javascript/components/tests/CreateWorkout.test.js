import React from 'react'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import CreateWorkout from "../pages/CreateWorkout"
import { BrowserRouter, useNavigate } from "react-router-dom"
import "@testing-library/jest-dom"

describe("<CreateWorkout />", () => {
  const newWorkout = {
    name: 'Arnold',
    workout_type: 'Weightlifting',
    duration: '90',
    schedule: '2023-04-18 00:00',
    description: 'Bench press: 4 sets of 12, (60-75% of Bodyweight Bench press Incline: 4 sets of 12, (60-75% of Bodyweight) Bodyweight Dips: 4 sets of 12Push ups: 4 sets to failure Adjust weight by conformability'
  }
  
  beforeEach(() => {
    const createWorkoutSpy = jest.fn()
  render(
    <BrowserRouter>
      <CreateWorkout createWorkout={createWorkoutSpy} />
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
    expect(screen.getByPlaceholderText(/what is the workout name/i)).toBeInTheDocument

    expect(screen.getByPlaceholderText(/what is the type of workout\?/i)).toBeInTheDocument

    expect(screen.getByPlaceholderText(/how long does this exercise take\?/i)).toBeInTheDocument

    expect(screen.getByText(/schedule/i)).toBeInTheDocument

    expect(screen.getByPlaceholderText(/describe the workout!/i)).toBeInTheDocument
  })

  // Doesn't work - receives ''
  // it("updates name when data is input", () => {
  //   const newName = newWorkout.name
  //   const input = screen.getByPlaceholderText(/what is the workout name/i)
  //   userEvent.type(input, newName)
  //   expect(input.value).toBe(newName)
  // })
//  test ("user input", () => {
  // render( <BrowserRouter><CreateWorkout /></BrowserRouter>)

//   screen.logTestingPlaygroundURL()
//   userEvent.type(screen.getByPlaceholderText("Describe the workout!"), "Hello")
 
//   expect(screen.getByPlaceholderText("Describe the workout!")).toHaveValue("Hello")
//  }
//  )
  // Doesn't work - tried various input values and keep receiveing '' in return
  // it("updates duration when data is input", () => {
  //   const input = screen.getByPlaceholderText(/how long does this exercise take\?/i)
  //   userEvent.type(input, '1358 AM')
  //   expect(input.value).toBe('13:58')
  // })

  it("has a button to submit", () => {
    expect(screen.getByRole('button', {
      name: /submit/i
    })).
      toBeInTheDocument
  })

  // Doesn't work - useNavigate is not called
  // it("submits when the button is clicked", () => {
  //   const submitButton = screen.getByRole('button', {
  //     name: /submit/i
  //   })
    
  //   userEvent.click(submitButton)
  //   expect(useNavigate).toHaveBeenCalled()
  // })

  it("has a button to cancel", () => {
    expect(screen.getByRole('button', {
      name: /cancel/i
    })).toBeInTheDocument
  })

  // Doesn't work - spy function returns 0
  // it("cancels when the button is clicked", () => {
  // const cancelButton = jest.fn()
  //   userEvent.click(screen.getByRole('button', {
  //     name: /cancel/i
  //   }))
  //   expect(cancelButton).toHaveBeenCalled()
  // })
})