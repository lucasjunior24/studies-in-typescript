import { HistoryContainer, HistoryList, Status } from "./styled";

import { formatDistanceToNow } from "date-fns";

import { useAtomValue } from "jotai";
import { todoListAtom } from "../../infra/atoms/cycles";
import { ptBR } from "date-fns/locale/pt-BR";

export function History() {
  const cycles = useAtomValue(todoListAtom);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status data-color="green">Concluido</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status data-color="red">Interronpido</Status>
                  )}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status data-color="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
