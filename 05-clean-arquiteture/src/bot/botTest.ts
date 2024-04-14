import { User } from "../registrarUsuario";
import { BotAxios } from "./botAxios";

export class BotTest extends BotAxios {
  data: any[] = [{ id: "lucas" }];
  async get<T>(id: string): Promise<T> {
    return this.data.find((d) => d.id === id);
  }
}
const bot_test = new BotTest();
