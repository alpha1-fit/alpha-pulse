import React, { useState, useEffect, useRef } from "react"
import { Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import Toggle from "../components/DropDown"

const IndexWorkouts = ({ logged_in, workouts, current_user, toggleNewWorkout }) => {
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts)

  const filterWorkouts = (userId) => {
    if (userId === "all") {
      setFilteredWorkouts(workouts)
    } else {
      let tempFilter = workouts.filter(workout => workout.user_id === userId)
      setFilteredWorkouts(tempFilter)
    }
  }

  const newWorkoutClick = () => {
    toggleNewWorkout()
  }

  const parseTime = (seconds) => {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - hours * 3600) / 60)
    let remainder = seconds - hours * 3600 - minutes * 60
    return [hours, minutes, remainder].join(":")
  }

  return (
    <div className="content-wrap">
      <div className="filter-toggle">
        <Toggle
          loggedIn={logged_in}
          currentUser={current_user}
          filterWorkouts={filterWorkouts}
        />
      </div>
      <br />
      <div className="card-container">
        {filteredWorkouts.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-content">
              <div className="card-body">
                <h3 className="card-title">{card.name}</h3>
                <h4 className="card-description">
                  Type: {card.workout_type}<br />
                  Duration: {parseTime(card.duration)}<br />
                  Schedule: {card.schedule}<br />
                  Description: {card.description}
                </h4>
                <NavLink className="card-link" to={`/workoutshow/${card.id}`}>See Details</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttonCreate">
        <Button onClick={newWorkoutClick}>Create New Workout</Button>
      </div>
    </div>
  )
}

export default IndexWorkouts