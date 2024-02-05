import { Dashboard } from '@/pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/app'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
])
