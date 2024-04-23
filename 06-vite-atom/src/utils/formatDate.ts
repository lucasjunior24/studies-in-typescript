import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatrDate(date: string) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  });
}
