import { BotAxios } from "./botAxios";

export class Service {
  bot: BotAxios;
  constructor(bote: BotAxios) {
    this.bot = bote;
  }

  async getData<User>(id: string): Promise<User> {
    return await this.bot.get(id);
  }
}
