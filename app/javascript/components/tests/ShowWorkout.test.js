import React from "react";
import { render, screen } from "@testing-library/react";
import ShowWorkout from "../pages/ShowWorkout";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import workouts from "../App";

describe("<ShowWorkout />", () => {
  it("it renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/workoutshow/1"]}>
        <Routes>
          <Route
            path="/workoutshow/:id"
            element={<ShowWorkout workouts={workouts} logged_in={true} />}
          />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL();
    expect(<ShowWorkout />).toBeDefined();
  });
  it("it renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/workoutshow/1"]}>
        <Routes>
          <Route
            path="/workoutshow/:id"
            element={<ShowWorkout logged_in={false} />}
          />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL();
    expect(<ShowWorkout />).toBeDefined();
  });
});
