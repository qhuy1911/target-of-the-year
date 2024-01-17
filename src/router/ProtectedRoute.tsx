import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem('accessToken')) {
    navigate('/login');
  }

  return <Outlet />;
};

export default ProtectedRoute;
