import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { NewDoctorFormData } from "../../pages/Doctor";
import { queryClient } from "../../App";
import api from "../service/axios";
import { Doctors } from "../../pages/Doctors";

export class DoctorsAtom {
  createDoctorAtom = atomWithMutation(() => ({
    mutationKey: ["doctors"],
    mutationFn: async (doctor: NewDoctorFormData) => {
      console.log("atomWithMutation");
      console.log(doctor);
      api.post("/doctors", doctor);
    },
    onSuccess: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["doctors"] });
    },
  }));

  getDoctors = atomWithQuery<{ data: Doctors[] }>(() => ({
    queryKey: ["doctors"],
    queryFn: async () => {
      return await api.get("/doctors");
    },
  }));
}
export const doctorsAtom = new DoctorsAtom();
