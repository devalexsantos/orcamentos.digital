import { SearchBar } from '@/components/search-bar'
import { LastBudgets } from './components/LastBudgets'

export function Home() {
  return (
    <div className="flex flex-col gap-8">
      <SearchBar />
      <LastBudgets />
    </div>
  )
}
