import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Check, ChevronsUpDown, PlusCircle, Trash } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function CreateBudgetForm() {
  const [totalValue, setTotalValue] = useState(0)

  const formSchema = z.object({
    client: z.string({
      required_error: 'Por favor selecione um cliente.',
    }),
    itemsBudget: z.array(
      z.object({
        name: z.string(),
        quantity: z.coerce.number().min(1),
        price: z.coerce.number(),
      }),
    ),
  })

  type FormValueType = z.infer<typeof formSchema>

  const form = useForm<FormValueType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemsBudget: [
        {
          name: '',
          quantity: 1,
          price: 0,
        },
      ],
    },
  })

  function calculateTotal() {
    const total = form
      .getValues()
      .itemsBudget.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.quantity * currentProduct.price
      }, 0)
    setTotalValue(total)
  }

  form.watch(() => {
    calculateTotal()
  })

  const clients = [
    {
      id: '1',
      name: 'Login Informática',
    },
    {
      id: '2',
      name: 'Casa do Lavrador',
    },
  ]

  const { control, handleSubmit } = form

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itemsBudget',
  })

  const clientsList = clients.map((client) => {
    return {
      value: client.id,
      label: client.name,
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Cliente:</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'justify-between overflow-hidden',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? clientsList.find(
                            (client) => client.value === field.value,
                          )?.label
                        : 'Selecione um cliente'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Buscar cliente..." />
                    <CommandEmpty>Nenhum cliente encontrado.</CommandEmpty>
                    <CommandGroup>
                      {clientsList.map((client) => (
                        <CommandItem
                          value={client.label}
                          key={client.value}
                          onSelect={() => {
                            form.setValue('client', client.value)
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              client.value === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {client.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <Link
                      className="w-full flex items-center gap-3 text-sm p-3 bg-primary text-white text-md"
                      to="/clientes/cadastrar"
                    >
                      <PlusCircle />
                      Cadastrar Cliente
                    </Link>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        {fields.map((item, index) => (
          <div className="flex gap-2 items-end" key={item.id}>
            <FormField
              control={control}
              name={`itemsBudget.${index}.name`}
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Nome:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o nome do item"
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`itemsBudget.${index}.quantity`}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Qtd.:</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`itemsBudget.${index}.price`}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preço:</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="destructive"
              onClick={() => remove(index)}
            >
              <Trash size={22} />
            </Button>
          </div>
        ))}
        <div>
          <Button
            type="button"
            className="flex items-center gap-2"
            onClick={() => append({ name: '', quantity: 1, price: 0 })}
          >
            <PlusCircle /> Adicionar Item
          </Button>
        </div>
        <div>
          Total:{' '}
          {totalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <Button
          type="submit"
          className="w-full bg-lime-600 hover:bg-lime-500 transition-ease-in-out"
        >
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
