import { HistoryContainer, HistoryList } from "./styled";

// import { formatDistanceToNow } from "date-fns";

import { NewDoctorFormData } from "../Doctor";
// import { ptBR } from "date-fns/locale";

import { useDoctors } from "../../hooks/doctor";

export interface DoctorsDTO extends NewDoctorFormData {
  id: string;
  created_at: string;
}

export function Doctors() {
  const data = useDoctors();
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.name}</td>
                <td>{cycle.email}</td>
                <td>{cycle.email}</td>
                {/* <td>
                  {formatDistanceToNow(cycle.created_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
