import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Check, ChevronsUpDown, PlusCircle } from 'lucide-react'

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

export function CreateBudget() {
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

  const formSchema = z.object({
    client: z.string({
      required_error: 'Por favor selecione um cliente.',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Cadastrar</Button>
      </form>
    </Form>
  )
}
