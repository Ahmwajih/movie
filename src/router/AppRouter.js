// AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import MovieDetails from '../pages/MovieDetails';
function AppRouter() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> 

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
