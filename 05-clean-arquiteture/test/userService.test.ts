import { expect, test } from "@jest/globals";
import { BotTest } from "./dependency/botTest";
import { UserService } from "../src/bot/userService";
import { User } from "../src/registrarUsuario";

test("Deve criar usuarios", async () => {
  const bot_test = new BotTest();

  const user: User = {
    email: "123",
    name: "lucas",
    password: "1234",
  };
  const s_test = new UserService(bot_test);
  const data = await s_test.createUser(user);
  expect(data.name).toBe(user.name);
  expect(data.email).toBe(user.email);
});

test("Deve obter usuarios por id", async () => {
  const bot_test = new BotTest();

  bot_test.post({ id: "lucas" });

  const s_test = new UserService(bot_test);
  const data = await s_test.getUser<User>("lucas");
  expect(data.id).toBe("lucas");
});
