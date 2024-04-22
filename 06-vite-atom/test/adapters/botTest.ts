/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IBotAxios } from "../../src/infra/service/RequestApi";

export class BotMockTest implements IBotAxios {
  private static data: any[] = [];

  async get<T>(route: string): Promise<T[]> {
    return BotMockTest.data;
  }
  async post<T>(route: string, item: T): Promise<T[]> {
    BotMockTest.data.push(item);
    return BotMockTest.data;
  }
  static singleton: BotMockTest = new BotMockTest();
}
