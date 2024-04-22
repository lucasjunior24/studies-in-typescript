import api from "./axios";

export interface IBotAxios {
  get<T>(route: string): Promise<T[]>;
  post<T>(route: string, item: T): Promise<T[]>;
}

export class BotAxios implements IBotAxios {
  api = api;

  async get<T>(route: string): Promise<T[]> {
    const data = await this.api.get(route);
    console.log(data.data);
    return data.data;
  }

  async post<T>(route: string, item: T): Promise<T[]> {
    const data = await this.api.post(route, item);
    return data.data;
  }
  static singleton: BotAxios = new BotAxios();
}
