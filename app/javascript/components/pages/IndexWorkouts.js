import React from "react";
import FakerWorkouts from "./FakerWorkouts";
import { Card, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import Example from "../components/DropDown";
const IndexWorkouts = ({ logged_in, workouts }) => {
  return (
    <>
      <div className="buttonCreate">
        <Example />
        <Button>
          <NavLink to={`/workoutnew/new`}>Create New Workout</NavLink>
        </Button>
      </div>
      <div className="fakecontent">
        <>
          {logged_in &&
            workouts.map((value) => (
              <Card style={{ width: "18rem" }} key={value.id}>
                <img src={value.image} alt="App Image" />
                <div className="realcards">
                  <CardBody className="CardIndex">
                    <CardTitle tag="h5">name: {value.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">
                        workout_type: {value.workout_type}
                      </div>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">
                        duration: {value.duration}
                      </div>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">
                        schedule: {value.schedule}
                      </div>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">
                        description: {value.description}
                      </div>
                    </CardSubtitle>
                    <a href={`/workoutshow/${value.id}`}>See Details</a>
                  </CardBody>
                </div>
              </Card>
            ))}
          {!logged_in && <FakerWorkouts />}
        </>
      </div>
    </>
  );
};

export default IndexWorkouts;
