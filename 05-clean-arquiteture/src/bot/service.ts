import axios from "axios";
import { BotAxios } from "./botAxios";

export class Service {
  bot: BotAxios;
  constructor(private bote: BotAxios) {
    this.bot = bote;
  }

  async get(id: string) {
    return await this.bot.getUser(id);
  }
}

export class BotTest extends BotAxios {
  async getUser(id: string) {
    return id;
  }
}
const bot_test = new BotTest();

const s_test = new Service(bot_test);
