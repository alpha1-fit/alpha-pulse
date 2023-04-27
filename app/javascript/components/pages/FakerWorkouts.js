import React from "react";
import fakeWorkouts from "../fakeWorkouts";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
} from "reactstrap";

const FakerWorkouts = () => {
  return (
    <div className="fakercontent">
      <>
        {fakeWorkouts.map((value, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <img src={value.image} alt="App Image" />
              <div className="fakecards">
                <CardBody className="Cards">
                  <CardTitle tag="h5">name: {value.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <div className="descriptionfake">
                      workout_type: ${value.workout_type}
                    </div>
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <div className="descriptionfake">
                      duration: {value.duration}
                    </div>
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <div className="descriptionfake">
                      schedule: {value.schedule}
                    </div>
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <div className="descriptionfake">
                      description: {value.description}
                    </div>
                  </CardSubtitle>
                  <a href={`/workoutshow/${value.id}`}>See Details</a>
                </CardBody>
              </div>
            </Card>
          );
        })}
      </>
    </div>
  );
};

export default FakerWorkouts;
