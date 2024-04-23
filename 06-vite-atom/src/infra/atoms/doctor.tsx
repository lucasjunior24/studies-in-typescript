/* eslint-disable react-hooks/rules-of-hooks */
import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";
import { NewDoctorFormData } from "../../pages/Doctor";

import { DoctorService } from "../service/doctorService";
import { queryClient } from "../../App";

export class DoctorsAtom {
  private static NAME = "doctors";

  constructor(private service: DoctorService = DoctorService.singleton) {}

  createDoctorAtom = atomWithMutation(() => ({
    mutationKey: [DoctorsAtom.NAME],
    mutationFn: async (doctor: NewDoctorFormData) => {
      this.service.post(doctor);
    },
    onSuccess: async () => {
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

  static singleton: DoctorsAtom = new DoctorsAtom();
}
