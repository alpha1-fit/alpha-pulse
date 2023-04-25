import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateWorkout from "../components/pages/CreateWorkout";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";

describe("<CreateWorkout />", () => {
  const newWorkout = {
    name: "Arnold",
    workout_type: "Weightlifting",
    duration: "90",
    schedule: "2023-04-18 00:00",
    description:
      "Bench press: 4 sets of 12, (60-75% of Bodyweight Bench press Incline: 4 sets of 12, (60-75% of Bodyweight) Bodyweight Dips: 4 sets of 12Push ups: 4 sets to failure Adjust weight by conformability",
  };

  beforeEach(() => {
    const createWorkoutSpy = jest.fn();
    render(
      <BrowserRouter>
        <CreateWorkout createWorkout={createWorkoutSpy} />
      </BrowserRouter>
    );
  });

  it("renders the page", () => {});

  it("has a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /are you ready to become alpha\?/i,
      })
    ).toBeInTheDocument;
  });

  it("has a form with entries for name, type, duration, schedule, and description", () => {
    expect(screen.getByPlaceholderText(/what is the workout name/i))
      .toBeInTheDocument;

    expect(screen.getByPlaceholderText(/what is the type of workout\?/i))
      .toBeInTheDocument;

    expect(screen.getByPlaceholderText(/how long does this exercise take\?/i))
      .toBeInTheDocument;

    expect(screen.getByText(/schedule/i)).toBeInTheDocument;

    expect(screen.getByPlaceholderText(/describe the workout!/i))
      .toBeInTheDocument;
  });

  it("has a button to submit", () => {
    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeInTheDocument;
  });

  it("has a button to cancel", () => {
    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    ).toBeInTheDocument;
  });
});
