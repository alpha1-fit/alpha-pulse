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

const App = (props) => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    readWorkouts();
  }, []);

  const readWorkouts = () => {
    fetch("/workouts")
      .then((response) => response.json())
      .then((payload) => setWorkouts(payload))
      .catch((error) => console.log(error));
  };
  return (
    <div className="page-container">
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workoutindex" element={<IndexWorkouts />} />
          <Route path="/workoutnew/new" element={<CreateWorkout />} />
          <Route path="/workoutshow/:id" element={<ShowWorkout />} />
          <Route path="/workoutedit/:id/edit" element={<EditWorkout />} />
          <Route path="/commentindex" element={<IndexComments />} />
          <Route path="/commentnew" element={<CreateComment />} />
          <Route path="/commentedit/:id" element={<EditComment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/workoutindex"
            element={<IndexWorkouts {...props} workouts={workouts} />}
          />
          <Route path="/workoutnew/new" element={<CreateWorkout />} />
          <Route path="/workoutshow/:id" element={<ShowWorkout />} />
          <Route path="/workoutedit/:id/edit" element={<EditWorkout />} />
          <Route path="/commentindex" element={<IndexComments />} />
          <Route path="/commentnew" element={<CreateComment />} />
          <Route path="/commentedit/:id" element={<EditComment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
