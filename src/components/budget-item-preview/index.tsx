import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

interface BudgetItemPreviewProps {
  budget: {
    budget_id: string
    status: string
    client: string
    value: number
    created_at: string
    expiration: string
  }
}

export function BudgetItemPreview({ budget }: BudgetItemPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl">{budget.budget_id}</span>
          <span
            className={`text-sm capitalize ${budget.status === 'em aberto' ? 'text-yellow-500' : 'text-lime-600'}`}
          >
            {budget.status}
          </span>
        </CardTitle>
        <CardDescription>Login Informática</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <span
          className={`font-bold ${budget.status === 'em aberto' ? 'text-yellow-500' : 'text-lime-600'}`}
        >
          R$3.290,00
        </span>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <span className="text-sm text-muted-foreground">
            Data: 05/02/2024
          </span>
          <span className="text-sm text-muted-foreground">
            Venc.: 10/02/2024
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
