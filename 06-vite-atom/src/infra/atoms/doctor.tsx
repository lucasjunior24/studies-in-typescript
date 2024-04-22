import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { NewDoctorFormData } from "../../pages/Doctor";
import { queryClient } from "../../App";

import { DoctorService } from "../service/doctorService";

export class DoctorsAtom {
  private static NAME = "doctors";
  constructor(private service: DoctorService) {}

  createDoctorAtom = atomWithMutation(() => ({
    mutationKey: [DoctorsAtom.NAME],
    mutationFn: async (doctor: NewDoctorFormData) => {
      this.service.post(doctor);
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: [DoctorsAtom.NAME],
      });
    },
  }));

  getDoctors = atomWithQuery(() => ({
    queryKey: [DoctorsAtom.NAME],
    queryFn: async () => {
      return await this.service.get();
    },
  }));

  // static singleton: DoctorsAtom = new DoctorsAtom();
}
