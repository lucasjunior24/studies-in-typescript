import { expect, test } from "@jest/globals";
import { BotTest } from "../src/bot/botAxios";
import { Service } from "../src/bot/service";
test("Deve registrar usuário", async () => {
  const bot_test = new BotTest();

  const s_test = new Service(bot_test);
  const data = await s_test.get("lucas");

  console.log(data);

  expect(data).toBe("lucas");
});
