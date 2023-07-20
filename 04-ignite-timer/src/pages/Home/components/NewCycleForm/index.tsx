import Zod from 'zod'
import { FormContainer, MinutesAmountInput, TaskInput } from './styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewCycleForm() {
  const newCycleFormValidationSchema = Zod.object({
    task: Zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: Zod.number()
      .min(1)
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
  })

  type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register(`task`)}
      />

      <datalist id="task-suggestion">
        <option value="projec" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register(`minutesAmount`, { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
