import { Colecao } from "../app/ports/colecao";

export class BancoEmMemoria implements Colecao {
  private static items: any[] = [];

  insert(item: any) {
    BancoEmMemoria.items.push(item);
    return item;
  }
}
