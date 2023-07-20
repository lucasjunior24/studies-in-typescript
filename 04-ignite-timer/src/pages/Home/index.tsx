import { FormProvider, useForm } from 'react-hook-form'
import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Zod from 'zod'

import {
  HomeContainer,
  StartCountownButton,
  StopCountownButton,
} from './styled'

import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { CycleContext } from '../../contexts/CyclesContext'
import { useContext } from 'react'

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CycleContext)

  const newCycleFormValidationSchema = Zod.object({
    task: Zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: Zod.number()
      .min(1)
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
  })

  type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountownButton>
        ) : (
          <StartCountownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountownButton>
        )}
      </form>
    </HomeContainer>
  )
}
