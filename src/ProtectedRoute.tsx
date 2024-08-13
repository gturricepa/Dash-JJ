import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../src/state/store'; 

interface ProtectedRouteProps {
  element: React.ReactElement;

}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {

  const isAuthenticated = useSelector((state: RootState) => !!state.user.name); 

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
