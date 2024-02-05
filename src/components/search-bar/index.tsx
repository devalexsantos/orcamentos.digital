import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Menu, Search } from 'lucide-react'
import { Input } from '../ui/input'

export function SearchBar() {
  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Início</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <form className="flex w-full gap-3">
        <Input
          placeholder="Digite o número do orçamento..."
          className="w-full"
          required
        />
        <Button type="submit">
          <Search />
        </Button>
      </form>
    </div>
  )
}
