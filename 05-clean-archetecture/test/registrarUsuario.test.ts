import { BancoEmMemoria } from "../src/adapters/bancoEmMemoria";
import { RegistrarUsuario, User } from "../src/app/users/registrarUsuario";
import { expect, test } from "@jest/globals";

test("Deve registrar usuário", () => {
  const banco = new BancoEmMemoria();
  const useCase = new RegistrarUsuario(banco);
  const user: User = {
    name: "Lucas",
    password: "123",
    email: "lucas@gmail.com",
  };

  const userTest = useCase.exec(user);
  expect(userTest).toHaveProperty("id");
  expect(userTest.name).toBe(user.name);
  expect(userTest.email).toBe(user.email);
  expect(userTest.email).toBe(user.email);
});
