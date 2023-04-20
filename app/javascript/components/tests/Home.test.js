import React from 'react'
import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>)
        expect(screen.getByText(
          /at alpha1, we are passionate about helping you achieve your overall health, not just your physical health\. we believe that working together and staying committed is the key to success\. that's why we created alphapulse, the fitness app that connects you to your friends and family's workouts\. with alphapulse, you can work out with your loved ones no matter where they are in the world, creating a sense of social interaction and accountability\. challenge yourself and others, and log your sessions to track your progress\. alphapulse empowers everyone to pursue their fitness goals\. join us on our shared fitness journey today\./i
          ))
        expect(screen.getByRole('heading', {
          name: /are you tired of struggling to achieve your fitness goals alone\?/i
        }))
  })
})