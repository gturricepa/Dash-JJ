import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../src/state/store'; // Atualize com o caminho correto para o seu store

interface ProtectedRouteProps extends RouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.name);

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
