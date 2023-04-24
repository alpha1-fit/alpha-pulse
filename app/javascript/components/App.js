import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState, } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import IndexWorkouts from './pages/IndexWorkouts'
import CreateWorkout from './pages/CreateWorkout'
import EditWorkout from './pages/EditWorkout'
import ShowWorkout from './pages/ShowWorkout'
import IndexComments from './pages/IndexComments'
import CreateComment from './pages/CreateComment'
import EditComment from './pages/EditComment'

const App = (props) => {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    readWorkouts()
  }, [])

  const [comments, setComments] = useState([])
  useEffect(() => {
    readComments()
  }, [])

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

  const readComments = () => {
    fetch("/comments")
    .then((response) => response.json())
    .then((payload) => setComments(payload))
    .catch((error) => console.log(error))
  }

  return (
    <div className='page'>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/workoutindex' element={<IndexWorkouts  {...props} workouts={workouts}/>} />
          <Route path='/workoutnew/new' element={<CreateWorkout {...props} createWorkout={createWorkout} />} />
         
          <Route path='/workoutshow/:id' element={<ShowWorkout />} />
          <Route path='/workoutedit/:id/edit' element={<EditWorkout />} />
          <Route path='/commentindex' element={<IndexComments {...props} comments={comments}/>} />
          <Route path='/commentnew' element={<CreateComment />} />
          <Route path='/commentedit/:id' element={<EditComment />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App