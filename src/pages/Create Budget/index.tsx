import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreateBudgetForm } from './components/create-budget-form'

export function CreateBudget() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Novo Orçamento</h1>
      <Card>
        <CardHeader className="py-3">
          <CardTitle className="text-sm text-muted-foreground">
            Seus dados:
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <span className="font-bold">ALEX SANTOS DESENVOLVEDOR LTDA</span>
          <span>devalexsantos@gmail.com</span>
          <span>(71) 99993-7809</span>
          <span>31.889.875-0001/10</span>
        </CardContent>
      </Card>
      <CreateBudgetForm />
    </div>
  )
}
