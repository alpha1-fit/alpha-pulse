import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
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

    return (
      <BrowserRouter>
        <Header {...props}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/workouts' element={<IndexWorkouts />} />
          <Route path='/workouts/new' element={<CreateWorkout />} />
          <Route path='/workouts/:id' element={<ShowWorkout />} />
          <Route path='/workouts/:id/edit' element={<EditWorkout />} />
          <Route path='/workouts/:id/comments' element={<IndexComments />} />
          <Route path='/workouts/:id/comments/new' element={<CreateComment />} />
          <Route path='/workouts/:id/comments/edit' element={<EditComment />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default App