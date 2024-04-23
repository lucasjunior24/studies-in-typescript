import { useAtom } from "jotai";
import { DoctorsAtom } from "../infra/atoms/doctor";
import { formatrDate } from "../utils/formatDate";

export function useCreate() {
  const [{ mutate, status }] = useAtom(DoctorsAtom.singleton.createDoctorAtom);
  return { create: mutate, status };
}
export function useDoctors() {
  const [{ data }] = useAtom(DoctorsAtom.singleton.getDoctors);
  const doctors = data?.map((d) => {
    return { ...d, created_at: formatrDate(d.created_at) };
  });
  return doctors;
}
