import { Dashboard } from '@/pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])
