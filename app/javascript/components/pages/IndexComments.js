import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const IndexComments = ({
  logged_in,
  current_user,
  comments,
  deleteComment
}) => {
  const handleDelete = () => { };
  return (
    <div className="content-wrap">
      <div className="card-container">
        {logged_in &&
          Array.isArray(comments) &&
          comments.map((comment) => {
            return (
              <div className="card" key={comment.id}>
                <div className="card-content">
                  <div className="card-body">
                    <h3 className="card-title">{comment.title}</h3>
                    <h4 className="card-description">
                      {comment.comment}<br />
                      Workout: {comment.workout_id}<br />
                      User: {comment.user_id}
                    </h4>
                    {current_user.id === comment.user_id && (
                      <div className="comment-options">
                        <Button>
                          <NavLink to={`/commentedit/${comment.id}`}>Edit</NavLink>
                        </Button>
                        <Button onClick={handleDelete}>Delete</Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div >
    </div >
  );
};

export default IndexComments;