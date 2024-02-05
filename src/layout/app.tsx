import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="container p-8">
      <Outlet />
    </div>
  )
}
