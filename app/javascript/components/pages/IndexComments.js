import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const IndexComments = ({
  logged_in,
  current_user,
  comments,
}) => {
  const handleDelete = () => {};
  return (
    <div className="card">
      {logged_in &&
        Array.isArray(comments) &&
        comments.map((comment) => {
          return (
            <Card style={{ width: "18rem" }} key={comment.id}>
              <CardBody className="Cards">
                <CardTitle tag="h5">title: {comment.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  comment: {comment.comment}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  workout: {comment.workout_id}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  user: {comment.user_id}
                </CardSubtitle>
                {current_user.id === comment.user_id && (
                  <>
                    <Button>
                      <NavLink to={`/commentedit/${comment.id}`}>Edit</NavLink>
                    </Button>
                    <Button onClick={handleDelete}>Delete</Button>
                  </>
                )}
              </CardBody>
            </Card>
          );
        })}
    </div>
  );
};

export default IndexComments;