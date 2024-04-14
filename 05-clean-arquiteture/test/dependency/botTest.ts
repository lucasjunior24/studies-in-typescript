import { IBotAxios } from "../../src/interface/botAxios";

export class BotTest implements IBotAxios {
  insert<T>(item: T): T {
    throw new Error("Method not implemented.");
  }
  private static data: any[] = [];

  async get<T>(id: string): Promise<T> {
    return BotTest.data.find((d) => d.id === id);
  }
  async post<T>(item: T): Promise<T> {
    BotTest.data.push(item);
    return item;
  }
}
