import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    alert("Please Login/Signup");
    return <Navigate to='/' />;
    
  }

  return children;
};

export default Protected;