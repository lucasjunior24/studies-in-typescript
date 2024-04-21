import { FormContainer, MinutesAmountInput, TaskInput } from "./styled";
import { useFormContext } from "react-hook-form";


export function NewCycleForm() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="name">name</label>
      <TaskInput
        id="name"
        placeholder="Dê um nome para seu projeto"
        {...register(`name`)}
      />
      <label htmlFor="email">email</label>
      <TaskInput
        id="email"
        placeholder="Dê um nome para seu projeto"
        {...register(`email`)}
      />
      <label htmlFor="specialization">specialization</label>
      <TaskInput
        id="specialization"
        placeholder="specialization"
        {...register(`specialization`)}
      />
      <label htmlFor="clinic">clinic</label>
      <TaskInput id="clinic" placeholder="clinic" {...register(`clinic`)} />

      <label htmlFor="address">address</label>
      <TaskInput id="address" {...register(`address`)} />

      <datalist id="task-suggestion">
        <option value="projec" />
      </datalist>

      <label htmlFor="phone_number">phone_number</label>
      <MinutesAmountInput
        id="phone_number"
        type="number"
        placeholder="phone_number"
        {...register(`phone_number`, { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
