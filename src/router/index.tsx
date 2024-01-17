/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import AuthProvider from '../context/AuthProvider'
import ProtectedRoute from './ProtectedRoute'
import ErrorPage from '../pages/ErrorPage'

const AuthLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
)

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: '/login'
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: '/'
          }
        ]
      }
    ]
  }
])
