import { FormProvider, useForm } from "react-hook-form";
import { Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Zod from "zod";

import { HomeContainer, StartCountownButton } from "./styled";

import { NewCycleForm } from "./NewCycleForm";

import { useNavigate } from "react-router-dom";

import { useCreate } from "../../hooks/doctor";

const newCycleFormValidationSchema = Zod.object({
  name: Zod.string().min(1, "Informe a tarefa"),
  email: Zod.string().min(1, "Informe a tarefa"),
  specialization: Zod.string().min(1, "Informe a tarefa"),
  clinic: Zod.string().min(1, "Informe a tarefa"),
  address: Zod.string().min(1, "Informe a tarefa"),
  phone_number: Zod.number()
    .min(1)
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

export type NewDoctorFormData = Zod.infer<typeof newCycleFormValidationSchema>;

export function Doctor() {
  const { create, status } = useCreate();

  const newDoctorForm = useForm<NewDoctorFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      specialization: "",
      clinic: "",
      address: "",
      phone_number: 0,
    },
  });

  const { handleSubmit, reset } = newDoctorForm;
  const navigate = useNavigate();
  function handleCreateNewCycle(data: NewDoctorFormData) {
    create(data);
    reset();
    navigate("/doctors");
  }
  return (
    <HomeContainer>
      <strong>total: {status}</strong>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newDoctorForm}>
          <NewCycleForm />
        </FormProvider>

        <StartCountownButton disabled={false} type="submit">
          <Play size={24} />
          Começar
        </StartCountownButton>
      </form>
    </HomeContainer>
  );
}
