import axios from "axios";
import { IBotAxios } from "../app/ports/botAxios";

export class BotAxios implements IBotAxios {
  axios = axios.create({
    baseURL: "http://192.168.100.37:3333",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // baseURL: 'http://localhost:3333',
  });

  async get<T>(id: string): Promise<T> {
    const data = await axios.get(id);
    return data.data.data;
  }
  insert<T>(item: T): T {
    throw new Error("Method not implemented.");
  }
  async post<T>(item: T): Promise<T> {
    const data = await axios.post("SASAS", item);
    return data.data.data;
  }
}
