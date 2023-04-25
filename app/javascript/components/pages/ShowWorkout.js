import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import fakeWorkouts from "../fakeWorkouts";

const ShowWorkout = ({ workouts, logged_in, deleteWorkout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let selectedWorkout =
    Array.isArray(workouts) && workouts.find((workout) => workout.id === +id);
    let fakeSelectedWorkout = Array.isArray(fakeWorkouts) && fakeWorkouts.find(
      (fakeWorkout) => fakeWorkout.id === +id)
    
    const handleDelete = () => {
      if (!logged_in) {
        alert("Thank you for trying αlphaPulse. Please log in or sign up to continue!")
      
      }
      else {
        deleteWorkout(selectedWorkout.id)
        navigate("/workoutindex")
      }
    }

  return (
    <div className="workout-show-align">
      {selectedWorkout && (
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
                to={`/WorkoutEdit/${selectedWorkout.id}`}
                className="nav-link"
              >
                Edit a Workout
              </NavLink>
            </Button>
            <Button onClick={handleDelete}>Delete Workout Profile</Button>
          </CardBody>
        </Card>
      )}
      {!logged_in && (
        <Card
          className="workout-show"
          style={{
            width: "25%",
            marginTop: "0px",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{fakeSelectedWorkout.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Workout_type: {fakeSelectedWorkout.workout_type}
            </CardSubtitle>
            <CardText>Duration: {fakeSelectedWorkout.duration}</CardText>
            <CardText>Schedule: {fakeSelectedWorkout.schedule}</CardText>
            <CardText>Description: {fakeSelectedWorkout.description}</CardText>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ShowWorkout;
