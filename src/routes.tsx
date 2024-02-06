import { Home } from '@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/app'
import Budget from './pages/Budget'
import { CreateBudget } from './pages/Create Budget'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/budget/:id',
        element: <Budget />,
      },
      {
        path: '/create-budget',
        element: <CreateBudget />,
      },
    ],
  },
])
