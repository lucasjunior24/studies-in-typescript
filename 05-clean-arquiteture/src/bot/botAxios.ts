import axios from "axios";

export class BotAxios {
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
}
