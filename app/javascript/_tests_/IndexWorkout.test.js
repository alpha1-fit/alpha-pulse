import React from 'react'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Card from "../components/pages/IndexWorkouts"
import "@testing-library/jest-dom"

describe("<IndexWorkouts />", () => {
    it("does <Card /> rendering without crashing our app", () => {
    render(
          <BrowserRouter>
            <Card />
          </BrowserRouter>)
          expect(<Card />).toBeDefined()
    })
})