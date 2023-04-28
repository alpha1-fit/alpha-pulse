import React, { useState, useEffect } from "react";
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
import IndexComments from "./IndexComments";
import FakerComments from "./FakerComments";

const ShowWorkout = ({
  workouts,
  logged_in,
  deleteWorkout,
  comments,
  current_user,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let selectedWorkout =
    Array.isArray(workouts) && workouts.find((workout) => workout.id === +id);
  let fakeSelectedWorkout =
    Array.isArray(fakeWorkouts) &&
    fakeWorkouts.find((fakeWorkout) => fakeWorkout.id === +id);

  const handleDelete = () => {
    if (!logged_in) {
      alert(
        "Thank you for trying αlphaPulse. Please log in or sign up to continue!"
      );
    } else {
      deleteWorkout(selectedWorkout.id);
      navigate("/workoutindex");
    }
  };

  const [filteredComments, setFilteredComments] = useState(comments);
  useEffect(() => {
    setFilteredComments(
      comments.filter((comment) => {
        return comment.workout_id === selectedWorkout.id;
      })
    );
  }, [comments, selectedWorkout]);

  return (
    <div>
      <div className="workout-show-align">
        {logged_in && selectedWorkout && (
          <div>
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
                <Button onClick={handleDelete}>Delete Workout Profile</Button>
                <Button>
                  <NavLink to={`/commentnew/`} className="nav-link">
                    Add a comment
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
            <div></div>
          </div>
        )}
      </div>
      <div>
        <IndexComments
          comments={filteredComments}
          current_user={current_user}
          logged_in={logged_in}
        />
        {!logged_in && (
        <div>
        <Card
        className="workout-show"
        style={{
          width: "25%",
          marginTop: "0px",
        }}
        >
          <CardBody>
            <div className="show-title">
            <CardTitle tag="h5">{fakeSelectedWorkout.name}</CardTitle>
            </div>
            <CardText>
              Workout_type: {fakeSelectedWorkout.workout_type}
            </CardText>
            <CardText>Duration: {fakeSelectedWorkout.duration}</CardText>
            <CardText>Schedule: {fakeSelectedWorkout.schedule}</CardText>
            <CardText>Description: {fakeSelectedWorkout.description}</CardText>
          </CardBody>
        </Card>
        <FakerComments/>
        </div>
      )}
      </div>
    </div>
  );
};

export default ShowWorkout;
