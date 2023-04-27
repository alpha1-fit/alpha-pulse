import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import IndexWorkouts from "./pages/IndexWorkouts";
import CreateWorkout from "./pages/CreateWorkout";
import EditWorkout from "./pages/EditWorkout";
import ShowWorkout from "./pages/ShowWorkout";
import IndexComments from "./pages/IndexComments";
import CreateComment from "./pages/CreateComment";
import EditComment from "./pages/EditComment";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = (props) => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    readWorkouts()
  }, [])

  const [comments, setComments] = useState([]);
  useEffect(() => {
    readComments()
  }, [])

  const [user, setUser] = useState()

  const [showSignUp, setShowSignUp] = useState(false)

  const [showSignIn, setShowSignIn] = useState(false)

  const [showUpdateUser, setShowUpdateUser] = useState(false)

  const toggleShowSignUp = () => {
    setShowSignUp(!showSignUp)
  }

  const toggleShowSignIn = () => {
    setShowSignIn(!showSignIn)
  }

  const toggleUpdateUser = () => {
    setShowUpdateUser(!showUpdateUser)
  }

  const createUser = (user) => {
    fetch('/users/signup', {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
      
      method: "POST"
    })
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch((errors) => console.log("User create errors:", errors))
  }

  const createSession = (user) => {
    fetch('/users/login', {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
      
      method: "POST"
    })
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch((errors) => console.log("Session errors:", errors))
  }

  const readWorkouts = () => {
    fetch("/workouts")
    .then((response) => response.json())
    .then((payload) => setWorkouts(payload))
    .catch((error) => console.log(error))
  }
  
  const createWorkout = (workout) => {
    fetch("/workouts", {
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      },
      
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readWorkouts())
      .catch((errors) => console.log("Workout create errors:", errors))
  }

   const updateWorkout = (workout, id) => {
    fetch(`/workouts/${id}`, {
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readWorkouts(payload))
      .catch((errors) => console.log("workout update errors:", errors));
  }

  const deleteWorkout = (id) => {
    fetch(`/workouts/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readWorkouts())
      .catch((errors) => console.log("delete errors:", errors))
  }

  const readComments = () => {
    fetch("/comments")
    .then((response) => response.json())
    .then((payload) => setComments(payload))
    .catch((error) => console.log(error))
  }

  const createComment = (comment) => {
    fetch("/comments", {
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json"
      },

      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readComments())
    .catch((errors) => console.log("Comment create errors:", errors))
  }

  const updateComment = (comment, id) => {
    fetch(`/comments/${id}`, {
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readComments(payload))
      .catch((errors) => console.log("Comment update errors:", errors));
  }

  const deleteComment = (id) => {
    fetch(`/comments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readComments())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <div className="page-container">
      {showSignUp && <SignUp createUser={createUser} toggle={toggleShowSignUp} />}
      {showSignIn && <SignIn newSession={createSession} toggle={toggleShowSignIn} />}
      <BrowserRouter>
        <Header logged_in={props.logged_in} toggleSignUp={toggleShowSignUp} toggleSignIn={toggleShowSignIn} sign_in_route={props.sign_in_route} sign_out_route={props.sign_out_route}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/workoutindex' element={<IndexWorkouts  {...props} workouts={workouts}/>} />
          <Route path='/workoutnew/new' element={<CreateWorkout {...props} createWorkout={createWorkout} />} />
          <Route path='/workoutshow/:id' element={<ShowWorkout {...props} workouts={workouts} deleteWorkout={deleteWorkout}/>} />
          <Route path='/workoutedit/:id/edit' element={<EditWorkout workouts={workouts} updateWorkout={updateWorkout}/>} />
          <Route path='/commentindex' element={<IndexComments createComment={createComment} deleteComment={deleteComment}/>} />
          <Route path='/commentnew' element={<CreateComment />} />
          <Route path='/commentedit/:id' element={<EditComment updateComment={updateComment} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
