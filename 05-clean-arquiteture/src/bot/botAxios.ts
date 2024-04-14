import axios from "axios";
import { Service } from "./service";

export class BotAxios {
  axios = axios.create({
    baseURL: "http://192.168.100.37:3333",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // baseURL: 'http://localhost:3333',
  });

  async getUser(id: string) {
    const data = await axios.get(id);
    return id;
  }
}

const botAxios = new BotAxios();

const s = new Service(botAxios);

export class BotTest extends BotAxios {
  async getUser(id: string) {
    return id;
  }
}
const bot_test = new BotTest();

const s_test = new Service(bot_test);
