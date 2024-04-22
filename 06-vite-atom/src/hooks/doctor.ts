/* eslint-disable react-hooks/rules-of-hooks */
import { useAtom } from "jotai";
import { DoctorsAtom } from "../infra/atoms/doctor";
import { DoctorService } from "../infra/service/doctorService";

export class DoctorHook {
  constructor(
    private doctorAtom: DoctorsAtom = new DoctorsAtom(new DoctorService())
  ) {}

  useCreate() {
    const [{ mutate, status }] = useAtom(this.doctorAtom.createDoctorAtom);
    return { create: mutate, status };
  }

  useDoctors() {
    const [{ data }] = useAtom(this.doctorAtom.getDoctors);
    return data;
  }

  static singleton: DoctorHook = new DoctorHook();
}

export const { useCreate, useDoctors } = DoctorHook.singleton;
