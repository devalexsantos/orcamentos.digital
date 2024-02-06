import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Link, Share, Trash } from 'lucide-react'

export default function Budget() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-4 items-center mt-4">
        <Link
          size={22}
          className="text-muted-foreground hover:text-primary cursor-pointer"
        />
        <Edit
          size={22}
          className="text-muted-foreground hover:text-primary cursor-pointer"
        />
        <Trash
          size={22}
          className="text-muted-foreground hover:text-red-600 cursor-pointer"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1 className="text-xl font-bold">ORC20240001</h1>
            <span className="text-sm">Em Aberto</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">De:</span>
            <span className="font-bold">ALEX SANTOS DESENVOLVEDOR</span>
            <span>devalexsantos@gmail.com</span>
            <span>(71) 99993-7809</span>
            <span>CNPJ: 31.889.875/0001-10</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Para:</span>
            <span className="font-bold">
              LOGIN INFORMÁTICA COMÉRCIO ELETRÔNICO
            </span>
            <span>contato@login.com.br</span>
            <span>(71) 99993-7809</span>
            <span>CNPJ: 31.889.875/0001-10</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Vencimento:</span>
            <span>11/02/2024</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">ITENS</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Qtd.</TableHead>
                <TableHead>Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Site Institucional</TableCell>
                <TableCell>01</TableCell>
                <TableCell>R$1.249,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hospedagem - 01 ano</TableCell>
                <TableCell>01</TableCell>
                <TableCell>R$249,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Manutenção</TableCell>
                <TableCell>01</TableCell>
                <TableCell>R$150,00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex flex-col gap-1 mt-4 px-4">
            <span className="text-base text-muted-foreground">Total:</span>
            <span className="font-bold text-xl">R$1.648,00</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">OBSERVAÇÕES</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nenhuma observação.</p>
        </CardContent>
      </Card>
      <Button className="flex items-center gap-2">
        <Share size={22} />
        Compartilhar
      </Button>
    </div>
  )
}
