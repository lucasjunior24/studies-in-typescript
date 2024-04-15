import { IBotAxios } from "../app/ports/botAxios";

export class UserService {
  constructor(private bot: IBotAxios) {}

  async getUser<User>(id: string): Promise<User> {
    return await this.bot.get(id);
  }

  async createUser<User>(user: User): Promise<User> {
    return await this.bot.post(user);
  }
}
