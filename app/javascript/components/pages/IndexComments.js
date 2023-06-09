import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const IndexComments = ({
  current_user,
  comments,
  deleteComment
}) => {
  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
  };
  return (
    <div className="content-wrap">
      <div className="card-container">
        {comments &&
          comments.map((comment, index) => {
            return (
              <div className="card" key={index}>
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
                        <Button onClick={handleDelete(comment.id)}>Delete</Button>
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