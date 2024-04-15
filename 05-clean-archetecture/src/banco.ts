export default class Banco {
  private static items: any[] = [];

  insert(item: any) {
    Banco.items.push(item);
    return item;
  }
}
