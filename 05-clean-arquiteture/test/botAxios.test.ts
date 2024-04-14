import { expect, test } from "@jest/globals";
import { BotTest } from "../src/bot/botTest";
import { Service } from "../src/bot/service";
import { User } from "../src/registrarUsuario";

test("Deve registrar usuário", async () => {
  const bot_test = new BotTest();

  const s_test = new Service(bot_test);
  const data = await s_test.getData<User>("lucas");

  console.log(data);

  expect(data.id).toBe("lucas");
});
