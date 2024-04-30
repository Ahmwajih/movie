// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRouter({ path, element }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRouter;
