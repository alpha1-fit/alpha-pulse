import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditWorkout from "../components/pages/EditWorkout";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import workouts from "../components/fakeWorkouts"

describe("<EditWorkout />", () => {
    it("it renders without crashing", () => {
      render(
        <MemoryRouter initialEntries={["/workoutedit/1"]}>
          <Routes>
            <Route
              path="/workoutedit/:id"
              element={<EditWorkout workouts ={workouts}/>}
            />
          </Routes>
        </MemoryRouter>
      );
      expect(<EditWorkout />).toBeDefined()
    });
    it('should display the "Edit a Workout" heading', () => {
        render(<MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<EditWorkout workouts ={workouts}/>}
          />
        </Routes>
      </MemoryRouter>);
        const headingElement = screen.getByRole('heading', { name: /edit a workout/i });
        expect(headingElement).toBeInTheDocument();
    });
    it('should display the "Workout Name" label', () => {
        render(<MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<EditWorkout workouts ={workouts}/>}
          />
        </Routes>
      </MemoryRouter>);
        const workoutNameLabel = screen.getByText(/workout name/i);
        expect(workoutNameLabel).toBeInTheDocument();
    });
    it('should display the "Workout Type" label', () => {
        render(<MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<EditWorkout workouts ={workouts}/>}
          />
        </Routes>
      </MemoryRouter>);
        const workoutTypeLabel = screen.getByText(/workout type/i);
        expect(workoutTypeLabel).toBeInTheDocument();
    });
    it('should display the "Schedule" label', () => {
        render(<MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<EditWorkout workouts ={workouts}/>}
          />
        </Routes>
      </MemoryRouter>);
        const scheduleLabel = screen.getByText(/schedule/i);
        expect(scheduleLabel).toBeInTheDocument();
    });
    it('should display the "Description" label', () => {
        render(<MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<EditWorkout workouts ={workouts}/>}
          />
        </Routes>
      </MemoryRouter>);
        const descriptionLabel = screen.getByText(/description/i);
        expect(descriptionLabel).toBeInTheDocument();
    });
    it('should display the "Duration" label', () => {
        render(<MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<EditWorkout workouts ={workouts}/>}
          />
        </Routes>
      </MemoryRouter>);
        const durationLabel = screen.getByText(/duration/i);
        expect(durationLabel).toBeInTheDocument();
    });
})
