import Banco from "../../banco";
import { Colecao } from "../ports/colecao";

export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export class RegistrarUsuario {
  constructor(private banco: Colecao) {}
  exec(user: User) {
    const passwordCript = user.password.split("").reverse().join("");

    user.id = Math.random().toString();
    user.password = passwordCript;
    this.banco.insert(user);
    return user;
  }
}
