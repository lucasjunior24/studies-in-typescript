/* eslint-disable react-hooks/rules-of-hooks */
import { useAtom } from "jotai";
import { doctorsAtom } from "../infra/atoms/doctor";

class DoctorHook {
  useCreate() {
    const [{ mutate, status }] = useAtom(doctorsAtom.createDoctorAtom);
    return { create: mutate, status };
  }

  useDoctors() {
    const [{ data }] = useAtom(doctorsAtom.getDoctors);
    return data?.data;
  }
}

export const doctorHook = new DoctorHook();
