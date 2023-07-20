import { FormContainer, MinutesAmountInput, TaskInput } from './styled'
import { useFormContext } from 'react-hook-form'

import { useContext } from 'react'
import { CycleContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

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
