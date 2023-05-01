import React, { useState, useEffect } from "react"
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import fakeWorkouts from "../fakeWorkouts"
import IndexComments from "./IndexComments"

const ShowWorkout = ({
  workouts,
  logged_in,
  deleteWorkout,
  comments,
  deleteComment,
  current_user,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let selectedWorkout = logged_in ? workouts.find((workout) => workout.id === +id) : fakeWorkouts.find((fakeWorkout) => fakeWorkout.id === +id)

  const handleDelete = () => {
    if (!logged_in) {
      alert(
        "Thank you for trying αlphaPulse. Please log in or sign up to continue!"
      )
    } else {
      deleteWorkout(selectedWorkout.id)
      navigate("/workoutindex")
    }
  }

  const [filteredComments, setFilteredComments] = useState(comments)
  useEffect(() => {
    setFilteredComments(
      comments.filter((comment) => {
        return comment.workout_id === selectedWorkout.id
      })
    )
  }, [comments, selectedWorkout])

  const parseTime = (seconds) => {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - hours * 3600) / 60)
    let remainder = seconds - hours * 3600 - minutes * 60
    return [hours, minutes, remainder].join(":")
  }

  return (
    <div>
      <div className="content-wrap">
        {logged_in && selectedWorkout && (
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{selectedWorkout.name}</h3>
                <h4 className="card-description">
                  Type: {selectedWorkout.workout_type}<br />
                  Duration: {selectedWorkout.duration}<br />
                  Schedule: {parseTime(selectedWorkout.schedule)}<br />
                  Description: {selectedWorkout.description}
                </h4>
                <div className="button-options">
                  <Button>
                    <NavLink
                      to={`/WorkoutEdit/${selectedWorkout.id}/edit`}
                      className="nav-link"
                    >
                      Edit a Workout
                    </NavLink>
                  </Button>
                  <Button onClick={handleDelete}>Delete Workout Profile</Button>
                  <Button>
                    <NavLink to={`/commentnew/`} className="nav-link">
                      Add a comment
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <IndexComments
          comments={filteredComments}
          current_user={current_user}
          logged_in={logged_in}
          deleteComment={deleteComment}
        />
      </div>
    </div>
  )
}

export default ShowWorkout