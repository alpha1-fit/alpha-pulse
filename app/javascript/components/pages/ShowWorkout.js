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
import fakeComments from '../fakeComments'

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

  const [filteredComments, setFilteredComments] = useState(logged_in ? comments : fakeComments)
  useEffect(() => {
    if(logged_in){
      setFilteredComments(comments.filter((comment) => comment.workout_id === selectedWorkout.id))
    } else {
      setFilteredComments(fakeComments.filter((comment) => comment.workout_id === selectedWorkout.id))
    }
  }, [comments, selectedWorkout, logged_in])

  return (
    <div>
      <div className="workout-show-align">
        <div className="card">
          <Card
            className="workout-show"
            style={{
              width: "25%",
              marginTop: "0px",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">{selectedWorkout.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Workout_type: {selectedWorkout.workout_type}
              </CardSubtitle>
              <CardText>Duration: {selectedWorkout.duration}</CardText>
              <CardText>Schedule: {selectedWorkout.schedule}</CardText>
              <CardText>Description: {selectedWorkout.description}</CardText>
              <Button>
                <NavLink
                  to={`/WorkoutEdit/${selectedWorkout.id}/edit`}
                  className="nav-link"
                >
                  Edit a Workout
                </NavLink>
              </Button>
              {current_user.id === selectedWorkout.user_id && <Button onClick={handleDelete}>Delete Workout Profile</Button>}
              <Button>
                <NavLink to={`/commentnew/`} className="nav-link">
                  Add a comment
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        </div>
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