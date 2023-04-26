import React, { useEffect, useState } from "react"
import { FormGroup, Label, Input, Form,Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const EditComment = ({logged_in, current_user, workout_id, comments, editComment}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [newComment, setNewComment] = useState({
    title: "",
    comment: "",
    workout_id: "",
    user_id: ""
  })
  useEffect(() => {
    if(comments.length > 0) {
      let currentComment = Array.isArray(comments) && comments.find((workout) => workout.id === +id
      )

      setNewComment({
        title: currentComment.title,
        comment: currentComment.comment,
        workout_id: currentComment.workout_id,
      })
    }
  }, [comments])

  const handleChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    if(current_user.id != newComment.user_id){
      alert("Please only edit your comments")
    }else{
      editComment(newComment)
      navigate(`/WorkoutShow/${workout_id}`)
    }
  }

  const cancelCreate = () => {
    console.log("cancel clicked")
    navigate(`/WorkoutShow/${workout_id}`)
  }

  return (
    <div className="comment-section">
      <Form>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="What is the comement title?" type="text" required={true} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="comment">Comment</Label>
          <Input id="comment" name="comment" placeholder="What is the comement?" type="textarea" required={true} onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
        <Button onClick={cancelCreate} name="cancel">
              Cancel
        </Button>
      </Form>
    </div>
  )
}

export default EditComment