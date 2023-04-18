import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import IndexWorkouts from './pages/IndexWorkouts'
import CreateWorkout from './pages/CreateWorkout'
import EditWorkout from './pages/EditWorkout'
import ShowWorkout from './pages/ShowWorkout'
import ShowConnection from './pages/ShowConnection'

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
  }) => {

    return (
      <BrowserRouter>
        <Navigation {
          logged_in,
          current_user,
          new_user_route,
          sign_in_route,
          sign_out_route
          }/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/workouts' element={<IndexWorkouts />} />
          <Route path='/workouts/new' element={<CreateWorkout />} />
          <Route path='/workouts/:id' element={<ShowWorkout />} />
          <Route path='/workouts/:id/edit' element={<EditWorkout />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App