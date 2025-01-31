import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/loginService';

const AuthGuard = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default AuthGuard;
