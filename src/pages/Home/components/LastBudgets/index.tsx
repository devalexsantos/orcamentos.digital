import { BudgetItemPreview } from '@/components/budget-item-preview'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function LastBudgets() {
  const lastBudgets = [
    {
      budget_id: 'ORC 20240001',
      status: 'em aberto',
      client: 'Login Informática',
      value: 298400,
      created_at: '05/02/2024',
      expiration: '10/02/2024',
    },
    {
      budget_id: 'ORC 20240002',
      status: 'pago',
      client: 'Login Informática',
      value: 298400,
      created_at: '05/02/2024',
      expiration: '10/02/2024',
    },
    {
      budget_id: 'ORC 20240003',
      status: 'em aberto',
      client: 'Login Informática',
      value: 298400,
      created_at: '05/02/2024',
      expiration: '10/02/2024',
    },
    {
      budget_id: 'ORC 20240004',
      status: 'pago',
      client: 'Login Informática',
      value: 298400,
      created_at: '05/02/2024',
      expiration: '10/02/2024',
    },
    {
      budget_id: 'ORC 20240005',
      status: 'pago',
      client: 'Login Informática',
      value: 298400,
      created_at: '05/02/2024',
      expiration: '10/02/2024',
    },
  ]

  return (
    <div className="flex flex-col gap-3 pb-8">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Últimos criados:</span>
        <Button asChild className="flex items-center gap-2" size="sm">
          <Link to="/create-budget">
            <PlusCircle size={18} />
            Criar novo
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row flex-wrap">
        {lastBudgets.map((budget, index) => (
          <BudgetItemPreview budget={budget} key={index} />
        ))}
      </div>
      <Button className="mt-8">Ver tudo</Button>
    </div>
  )
}
