import { SearchBar } from '@/components/search-bar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="container p-8 flex flex-col gap-4 max-w-4xl">
      <SearchBar />
      <Outlet />
    </div>
  )
}
